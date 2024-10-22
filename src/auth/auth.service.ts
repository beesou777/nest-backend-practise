import { ForbiddenException, Injectable } from '@nestjs/common';
import { Role, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
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

    async signup(dto: AuthDto): Promise<User> {
        const hash = await argon2.hash(dto.password);
    
        try {
            const user = await this.prisma.user.create({
                data: {
                    name: dto.name, // Include the name from the AuthDto
                    email: dto.email,
                    password: hash,
                    role: Role.Supplier, // Use the enum value for role
                },
            });
            delete user.password; // Do not return the password hash
    
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
    
    async signin(dto: AuthDto) {
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
}
