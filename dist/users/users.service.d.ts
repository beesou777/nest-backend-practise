import { PrismaService } from '../prisma/prisma.service';
import { ChangePasswordDto, CreateUserDto, ForgotPasswordDto, ResetPassword, SigninUserDto, UpdateUserDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MailService } from './services/send-reset-password';
export declare class UsersService {
    private readonly prisma;
    private jwt;
    private config;
    private readonly mailService;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService, mailService: MailService);
    createUser(data: CreateUserDto): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
        phone: string | null;
        isVerified: boolean;
        role: import(".prisma/client").$Enums.UserRole;
        companyName: string | null;
        createdAt: Date;
        updatedAt: Date;
        isUserBlocked: boolean;
        blockedAt: Date | null;
        failedAttempts: number;
    }>;
    signIn(dto: SigninUserDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: number, email: string, role: string): Promise<{
        access_token: string;
    }>;
    verifyToken(token: string): Promise<any>;
    updateUser(id: number, data: Partial<UpdateUserDto>): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
        phone: string | null;
        isVerified: boolean;
        role: import(".prisma/client").$Enums.UserRole;
        companyName: string | null;
        createdAt: Date;
        updatedAt: Date;
        isUserBlocked: boolean;
        blockedAt: Date | null;
        failedAttempts: number;
    }>;
    getUserProfile(userId: number): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
        phone: string | null;
        isVerified: boolean;
        role: import(".prisma/client").$Enums.UserRole;
        companyName: string | null;
        createdAt: Date;
        updatedAt: Date;
        isUserBlocked: boolean;
        blockedAt: Date | null;
        failedAttempts: number;
    }>;
    changePassword(userId: number, dto: ChangePasswordDto): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
        phone: string | null;
        isVerified: boolean;
        role: import(".prisma/client").$Enums.UserRole;
        companyName: string | null;
        createdAt: Date;
        updatedAt: Date;
        isUserBlocked: boolean;
        blockedAt: Date | null;
        failedAttempts: number;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<void>;
    resetPassword(dto: ResetPassword): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
        phone: string | null;
        isVerified: boolean;
        role: import(".prisma/client").$Enums.UserRole;
        companyName: string | null;
        createdAt: Date;
        updatedAt: Date;
        isUserBlocked: boolean;
        blockedAt: Date | null;
        failedAttempts: number;
    }>;
}
