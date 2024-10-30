import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
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
