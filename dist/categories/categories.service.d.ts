import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateCategoryDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, data: Partial<CreateCategoryDto>): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
