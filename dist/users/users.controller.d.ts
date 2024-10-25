import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(data: CreateUserDto): Promise<{
        email: string;
        password: string;
        name: string;
        companyName: string | null;
        id: number;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        email: string;
        password: string;
        name: string;
        companyName: string | null;
        id: number;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        email: string;
        password: string;
        name: string;
        companyName: string | null;
        id: number;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateUser(id: string, data: Partial<CreateUserDto>): Promise<{
        email: string;
        password: string;
        name: string;
        companyName: string | null;
        id: number;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(id: string): Promise<{
        email: string;
        password: string;
        name: string;
        companyName: string | null;
        id: number;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
