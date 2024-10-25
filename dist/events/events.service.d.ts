import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-evnet.dto';
export declare class EventsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateEventDto): Promise<{
        name: string;
        id: number;
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
        name: string;
        id: number;
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
        name: string;
        id: number;
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
        name: string;
        id: number;
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
        name: string;
        id: number;
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
