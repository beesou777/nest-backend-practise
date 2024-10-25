import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, SigninUserDto } from './dto';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) { }

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
    })
    if (!user) throw new ForbiddenException('Credentials incorrect')
    const pwMtches = await argon2.verify(user.password, dto.password)
    if (!pwMtches) throw new UnauthorizedException()

    return this.signToken(user.id, user.email, user.role)
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

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(userId: number) {
    const user = await this.prisma.user.findUnique({
      where:{
        id:userId
      }
    })
    if(!user) throw new ForbiddenException('User not found')
    delete user.password
    return user
  }

  async updateUser(id: number, data: Partial<CreateUserDto>) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
