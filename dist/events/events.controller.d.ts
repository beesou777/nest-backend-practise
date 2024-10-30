import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-evnet.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(data: CreateEventDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        date: Date;
        time: string;
        venue: string;
        organizerId: number;
        categoryId: number;
        locationId: number;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        date: Date;
        time: string;
        venue: string;
        organizerId: number;
        categoryId: number;
        locationId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        date: Date;
        time: string;
        venue: string;
        organizerId: number;
        categoryId: number;
        locationId: number;
    }>;
    update(id: number, data: Partial<CreateEventDto>): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        date: Date;
        time: string;
        venue: string;
        organizerId: number;
        categoryId: number;
        locationId: number;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        date: Date;
        time: string;
        venue: string;
        organizerId: number;
        categoryId: number;
        locationId: number;
    }>;
}
