import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto, UpdateSupplierDto } from './dto';
export declare class SuppliersController {
    private readonly suppliersService;
    constructor(suppliersService: SuppliersService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateSupplierDto: UpdateSupplierDto): Promise<{
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
    remove(id: string): Promise<{
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
