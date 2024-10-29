import { PrismaService } from '../prisma/prisma.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
export declare class FeedbacksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateFeedbackDto): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        eventId: number;
        rating: number;
        comment: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        eventId: number;
        rating: number;
        comment: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        eventId: number;
        rating: number;
        comment: string | null;
    }>;
    update(id: number, data: Partial<CreateFeedbackDto>): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        eventId: number;
        rating: number;
        comment: string | null;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        eventId: number;
        rating: number;
        comment: string | null;
    }>;
}
