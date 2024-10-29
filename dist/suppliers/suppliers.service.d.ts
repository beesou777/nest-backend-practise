import { PrismaService } from '../prisma/prisma.service';
import { CreateSupplierDto, UpdateSupplierDto } from './dto';
export declare class SuppliersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSupplierDto: CreateSupplierDto): Promise<{
        id: number;
        name: string;
        description: string;
        email: string;
        phone: string | null;
        locationId: number;
        userId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        description: string;
        email: string;
        phone: string | null;
        locationId: number;
        userId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        email: string;
        phone: string | null;
        locationId: number;
        userId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateSupplierDto: UpdateSupplierDto): Promise<{
        id: number;
        name: string;
        description: string;
        email: string;
        phone: string | null;
        locationId: number;
        userId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        email: string;
        phone: string | null;
        locationId: number;
        userId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
