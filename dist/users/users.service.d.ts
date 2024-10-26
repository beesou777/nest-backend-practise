import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, SigninUserDto, UpdateUserDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class UsersService {
    private readonly prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    createUser(data: CreateUserDto): Promise<{
        email: string;
        password: string;
        name: string;
        companyName: string | null;
        role: import(".prisma/client").$Enums.UserRole;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    signIn(dto: SigninUserDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: number, email: string, role: string): Promise<{
        access_token: string;
    }>;
    verifyToken(token: string): Promise<any>;
    updateUser(id: number, data: Partial<UpdateUserDto>): Promise<{
        email: string;
        password: string;
        name: string;
        companyName: string | null;
        role: import(".prisma/client").$Enums.UserRole;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getUserProfile(userId: number): Promise<{
        email: string;
        password: string;
        name: string;
        companyName: string | null;
        role: import(".prisma/client").$Enums.UserRole;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
