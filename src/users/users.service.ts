import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ChangePasswordDto, CreateUserDto, ForgotPasswordDto, ResetPassword, SigninUserDto, UpdateUserDto } from './dto';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';
import { MailService } from './services/send-reset-password';
import * as moment from "moment"

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
    private readonly mailService: MailService
  ) {}

  async createUser(data: CreateUserDto) {
    try {
      const hash = await argon2.hash(data.password);
      data.password = hash;
      const user = this.prisma.user.create({
        data: {
          email: data.email,
          name: data.name,
          companyName: data.companyName,
          password: data.password,
          role: data.role,
        },
      });

      delete (await user).password;
      return user
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
    }
  }

  async signIn(dto: SigninUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      }
    });

    if (!user) throw new ForbiddenException('Credentials incorrect');

    if (user.isUserBlocked && user.blockedAt) {
      const unblockTime = moment(user.blockedAt).add(8, 'hours');
      if (moment().isAfter(unblockTime)) {
        await this.prisma.user.update({
          where: { id: user.id },
          data: {
            isUserBlocked: false,
            blockedAt: null,
          }
        });
      } else {
        throw new ForbiddenException('User is temporarily blocked. Try again later.');
      }
    }

    // Verify password
    const pwMatches = await argon2.verify(user.password, dto.password);
    if (!pwMatches) {
      const updatedAttempts = (user.failedAttempts || 0) + 1;
      const isUserBlocked = updatedAttempts >= 10;

      await this.prisma.user.update({
        where: { id: user.id },
        data: {
          failedAttempts: updatedAttempts,
          isUserBlocked,
          blockedAt: isUserBlocked ? new Date() : null
        }
      });

      if (isUserBlocked) {
        throw new ForbiddenException('User account blocked due to multiple failed login attempts');
      }

      throw new UnauthorizedException('Invalid credentials');
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        failedAttempts: 0,
        isUserBlocked: false,
        blockedAt: null
      }
    });

    return this.signToken(user.id, user.email, user.role);
  }

  async signToken(userId: number, email: string, role: string): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
      role
    }

    const secret = this.config.get('JWT_SECRET')
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '7d',
      secret
    })

    return {
      access_token: token
    }
  }

  async verifyToken(token: string) {
    try {
      const secret = this.config.get('JWT_SECRET')
      const user = await this.jwt.verify(token, {
        secret
      })
      return user
    } catch (error) {
      return null
    }
  }

  async updateUser(id: number, data: Partial<UpdateUserDto>) {
    if (!id && data) throw new ForbiddenException('User ID not found')
    const updateData = {
      ...(data.name && { name: data.name }),
      ...(data.companyName && { companyName: data.companyName }),
    };
    return this.prisma.user.update({
      where: { id },
      data: updateData,
    });
  }

  async getUserProfile(userId: number) {
    const profile = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!profile) throw new ForbiddenException('User not found')
    delete profile.password

    return profile
  }

  async changePassword(userId: number, dto: ChangePasswordDto) {
    if (!userId && dto) throw new ForbiddenException('User ID not found')

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    })

    if (!user) throw new ForbiddenException('User not found')

    const pwMtches = await argon2.verify(user.password, dto.currentPassword)
    if (!pwMtches) throw new ForbiddenException('Current Password not correct')
    if (dto.newPassword !== dto.confirmPassword) throw new ForbiddenException('Password not match')
    const hash = await argon2.hash(dto.newPassword)
    const updateUser = this.prisma.user.update({
      where: { id: userId },
      data: { password: hash }
    })
    delete (await updateUser).password
    return updateUser
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    if (!dto.email) throw new ForbiddenException('Email not found')
    const token = uuidv4()
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } })
    if (!user) throw new ForbiddenException('User not found')

    await this.prisma.resetPasswordToken.create({
      data: {
        token: token,
        userId: user.id,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 1)
      }
    })

    await this.mailService.sendPasswordResetEmail(user.email, token)
  }

  async resetPassword(dto: ResetPassword) {
    if (dto.newPassword !== dto.confirmPassword) throw new ForbiddenException('Password not match')
    const getUserData = await this.prisma.resetPasswordToken.findUnique({
      where: { token: dto.token }
    })
    const newPassword = await argon2.hash(dto.newPassword)
    if (getUserData?.expiresAt < new Date() || !getUserData) throw new ForbiddenException('Token is exipre or invalid')

    const user = await this.prisma.user.update({
      where: { id: getUserData.userId },
      data: { password: newPassword }
    })

    await this.prisma.resetPasswordToken.update({
      where: { token: dto.token },
      data: { isValid: false }
    })

    await this.prisma.resetPasswordToken.delete({
      where: { token: dto.token }
    })
    delete user.password
    return user
  }
}
