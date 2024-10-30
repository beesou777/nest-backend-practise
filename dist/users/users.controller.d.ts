import { UsersService } from './users.service';
import { ChangePasswordDto, CreateUserDto, ForgotPasswordDto, ResetPassword, SigninUserDto, UpdateUserDto } from './dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
        isUserBlocked: boolean;
        blockedAt: Date | null;
        failedAttempts: number;
    }>;
    signIn(dto: SigninUserDto): Promise<{
        access_token: string;
    }>;
    getProfile(req: Record<string, any>): Promise<any>;
    updateUser(req: Record<string, any>, data: Partial<UpdateUserDto>): Promise<{
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
        isUserBlocked: boolean;
        blockedAt: Date | null;
        failedAttempts: number;
    }>;
    changePassword(req: Record<string, any>, data: ChangePasswordDto): Promise<{
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
        isUserBlocked: boolean;
        blockedAt: Date | null;
        failedAttempts: number;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<void>;
    resetPassword(dto: ResetPassword): Promise<{
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
        isUserBlocked: boolean;
        blockedAt: Date | null;
        failedAttempts: number;
    }>;
}
