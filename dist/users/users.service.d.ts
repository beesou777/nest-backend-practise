import { PrismaService } from '../prisma/prisma.service';
import { ChangePasswordDto, CreateUserDto, SigninUserDto, UpdateUserDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class UsersService {
    private readonly prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    createUser(data: CreateUserDto): Promise<{
        id: number;
        email: string;
        password: string;
        name: string;
        phone: string | null;
        isVerified: boolean;
        role: import(".prisma/client").$Enums.UserRole;
        companyName: string | null;
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
        id: number;
        email: string;
        password: string;
        name: string;
        phone: string | null;
        isVerified: boolean;
        role: import(".prisma/client").$Enums.UserRole;
        companyName: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getUserProfile(userId: number): Promise<{
        id: number;
        email: string;
        password: string;
        name: string;
        phone: string | null;
        isVerified: boolean;
        role: import(".prisma/client").$Enums.UserRole;
        companyName: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    changePassword(userId: number, dto: ChangePasswordDto): Promise<{
        id: number;
        email: string;
        password: string;
        name: string;
        phone: string | null;
        isVerified: boolean;
        role: import(".prisma/client").$Enums.UserRole;
        companyName: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
