import { PrismaService } from '../prisma/prisma.service';
import { UpdateSupplierDto } from './dto';
export declare class SuppliersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: number | null;
        description: string;
        categoryId: number;
        locationId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: number | null;
        description: string;
        categoryId: number;
        locationId: number;
    }>;
    update(id: number, updateSupplierDto: UpdateSupplierDto): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: number | null;
        description: string;
        categoryId: number;
        locationId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: number | null;
        description: string;
        categoryId: number;
        locationId: number;
    }>;
}
