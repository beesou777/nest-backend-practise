import { SuppliersService } from './suppliers.service';
import { UpdateSupplierDto } from './dto';
export declare class SuppliersController {
    private readonly suppliersService;
    constructor(suppliersService: SuppliersService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateSupplierDto: UpdateSupplierDto): Promise<{
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
    remove(id: string): Promise<{
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
