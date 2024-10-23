import { ForbiddenException, Injectable } from '@nestjs/common';
import { Role, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignupDto, SigninDto } from './dto'; // Update imports
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService
    ) {}

    async signup(dto: SignupDto): Promise<User> {
        const hash = await argon2.hash(dto.password);
    
        try {
            const user = await this.prisma.user.create({
                data: {
                    name: dto.name,
                    email: dto.email,
                    password: hash,
                    role: Role.Supplier,
                },
            });
            delete user.password;
    
            return user;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Email is already taken');
                }
            }
            throw error;
        }
    }

    async signin(dto: SigninDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });

        if (!user) throw new ForbiddenException('Credentials incorrect');

        const pwMatches = await argon2.verify(user.password, dto.password);

        if (!pwMatches) throw new ForbiddenException('Credentials incorrect');

        return this.signToken(user.id, user.email, user.role);
    }

    async signToken(userId: number, email: string, role: string): Promise<{ access_token: string }> {
        const payload = {
            sub: userId,
            email,
            role,
        };
        const secret = this.config.get('JWT_SECRET');

        const token = await this.jwt.signAsync(payload, {
            expiresIn: '1h',
            secret,
        });

        return {
            access_token: token,
        };
    }

    async user(userId: number) {
        const user = await this.prisma.user.findUnique({
            where:{
                id:userId
            }
        })

        if(!user) throw new ForbiddenException('User not found')
        delete user.password
        return user
    }

    async verifyJWT(token: string) {
        try {
            const decoded = await this.jwt.verifyAsync(token, {
                secret: this.config.get('JWT_SECRET'),
            });
            return decoded;
        } catch (error) {
            return null;
        }
    }
}
