import { UsersService } from './users.service';
import { CreateUserDto, SigninUserDto } from './dto';
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
    findAll(): Promise<{
        email: string;
        password: string;
        name: string;
        companyName: string | null;
        role: import(".prisma/client").$Enums.UserRole;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        email: string;
        password: string;
        name: string;
        companyName: string | null;
        role: import(".prisma/client").$Enums.UserRole;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateUser(id: string, data: Partial<CreateUserDto>): Promise<{
        email: string;
        password: string;
        name: string;
        companyName: string | null;
        role: import(".prisma/client").$Enums.UserRole;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(id: string): Promise<{
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
