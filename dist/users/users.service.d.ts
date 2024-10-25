import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        email: string;
        password: string;
        name: string;
        companyName: string | null;
        id: number;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateUser(id: number, data: Partial<CreateUserDto>): Promise<{
        email: string;
        password: string;
        name: string;
        companyName: string | null;
        id: number;
        role: import(".prisma/client").$Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(id: number): Promise<{
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
