import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    create(data: CreateLocationDto): Promise<{
        id: number;
        city: string;
        state: string;
        country: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        city: string;
        state: string;
        country: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        city: string;
        state: string;
        country: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, data: Partial<CreateLocationDto>): Promise<{
        id: number;
        city: string;
        state: string;
        country: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        city: string;
        state: string;
        country: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
