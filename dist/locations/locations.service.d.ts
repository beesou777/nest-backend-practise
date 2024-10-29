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
        postalCode: string;
        lat: import("@prisma/client/runtime/library").Decimal;
        lng: import("@prisma/client/runtime/library").Decimal;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        state: string;
        country: string;
        postalCode: string;
        lat: import("@prisma/client/runtime/library").Decimal;
        lng: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        state: string;
        country: string;
        postalCode: string;
        lat: import("@prisma/client/runtime/library").Decimal;
        lng: import("@prisma/client/runtime/library").Decimal;
    }>;
    update(id: number, data: Partial<CreateLocationDto>): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        state: string;
        country: string;
        postalCode: string;
        lat: import("@prisma/client/runtime/library").Decimal;
        lng: import("@prisma/client/runtime/library").Decimal;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        state: string;
        country: string;
        postalCode: string;
        lat: import("@prisma/client/runtime/library").Decimal;
        lng: import("@prisma/client/runtime/library").Decimal;
    }>;
}
