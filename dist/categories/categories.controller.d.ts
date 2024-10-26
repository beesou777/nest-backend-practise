import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
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
