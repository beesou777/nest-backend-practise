import { PrismaService } from '../prisma/prisma.service';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
export declare class EventsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createEvent(createEventInput: CreateEventInput, organizerId: number): Promise<{
        id: number;
        organizerId: number;
        eventType: string;
        date: Date;
        location: string;
        guestCount: number;
        budget: import("@prisma/client/runtime/library").Decimal;
        specialRequests: string | null;
        createdAt: Date;
    }>;
    updateEvent(updateEventInput: UpdateEventInput): Promise<{
        id: number;
        organizerId: number;
        eventType: string;
        date: Date;
        location: string;
        guestCount: number;
        budget: import("@prisma/client/runtime/library").Decimal;
        specialRequests: string | null;
        createdAt: Date;
    }>;
    deleteEvent(id: number): Promise<boolean>;
    getEvent(id: number): Promise<{
        id: number;
        organizerId: number;
        eventType: string;
        date: Date;
        location: string;
        guestCount: number;
        budget: import("@prisma/client/runtime/library").Decimal;
        specialRequests: string | null;
        createdAt: Date;
    }>;
    getEvents(): Promise<{
        id: number;
        organizerId: number;
        eventType: string;
        date: Date;
        location: string;
        guestCount: number;
        budget: import("@prisma/client/runtime/library").Decimal;
        specialRequests: string | null;
        createdAt: Date;
    }[]>;
    searchEvents(searchTerm: string): Promise<{
        id: number;
        organizerId: number;
        eventType: string;
        date: Date;
        location: string;
        guestCount: number;
        budget: import("@prisma/client/runtime/library").Decimal;
        specialRequests: string | null;
        createdAt: Date;
    }[]>;
}
