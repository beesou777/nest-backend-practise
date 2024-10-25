import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    create(data: CreateLocationDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        country: string;
        state: string;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        country: string;
        state: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        country: string;
        state: string;
    }>;
    update(id: number, data: Partial<CreateLocationDto>): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        country: string;
        state: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        city: string;
        country: string;
        state: string;
    }>;
}
