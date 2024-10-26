import { UsersService } from './users.service';
import { CreateUserDto, SigninUserDto, UpdateUserDto } from './dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    getProfile(req: Record<string, any>): Promise<any>;
    updateUser(req: Record<string, any>, data: Partial<UpdateUserDto>): Promise<{
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
