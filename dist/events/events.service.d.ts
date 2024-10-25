import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-evnet.dto';
export declare class EventsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateEventDto): Promise<{
        id: number;
        name: string;
        description: string;
        date: Date;
        time: string;
        venue: string;
        organizerId: number;
        categoryId: number;
        locationId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        description: string;
        date: Date;
        time: string;
        venue: string;
        organizerId: number;
        categoryId: number;
        locationId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        date: Date;
        time: string;
        venue: string;
        organizerId: number;
        categoryId: number;
        locationId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, data: Partial<CreateEventDto>): Promise<{
        id: number;
        name: string;
        description: string;
        date: Date;
        time: string;
        venue: string;
        organizerId: number;
        categoryId: number;
        locationId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        date: Date;
        time: string;
        venue: string;
        organizerId: number;
        categoryId: number;
        locationId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
