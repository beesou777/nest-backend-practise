import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';
export declare class CategoriesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        id: number;
        name: string;
        type: import(".prisma/client").$Enums.CategoryType;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        type: import(".prisma/client").$Enums.CategoryType;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        type: import(".prisma/client").$Enums.CategoryType;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<{
        id: number;
        name: string;
        type: import(".prisma/client").$Enums.CategoryType;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        type: import(".prisma/client").$Enums.CategoryType;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
