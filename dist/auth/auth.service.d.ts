import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignupDto, SigninDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signup(dto: SignupDto): Promise<User>;
    signin(dto: SigninDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: number, email: string, role: string): Promise<{
        access_token: string;
    }>;
    user(userId: number): Promise<{
        email: string;
        password: string;
        name: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        contactInfo: string | null;
        createdAt: Date;
    }>;
    verifyJWT(token: string): Promise<any>;
}
