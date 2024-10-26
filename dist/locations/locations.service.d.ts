import { PrismaService } from '../prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
export declare class LocationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateLocationDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        state: string;
        country: string;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        state: string;
        country: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        state: string;
        country: string;
    }>;
    update(id: number, data: Partial<CreateLocationDto>): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        state: string;
        country: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        state: string;
        country: string;
    }>;
}
