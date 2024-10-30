import { CategoriesService } from './categories.service';
import { UpdateCategoryDto, CreateCategoryDto } from './dto';
export declare class CategoriesController {
    private readonly categoryService;
    constructor(categoryService: CategoriesService);
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
    findOne(id: string): Promise<{
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
    remove(id: string): Promise<{
        id: number;
        name: string;
        type: import(".prisma/client").$Enums.CategoryType;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
