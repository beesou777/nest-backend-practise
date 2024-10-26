import { PrismaService } from '../prisma/prisma.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
export declare class FeedbacksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateFeedbackDto): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        comment: string | null;
        rating: number;
        eventId: number;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        comment: string | null;
        rating: number;
        eventId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        comment: string | null;
        rating: number;
        eventId: number;
    }>;
    update(id: number, data: Partial<CreateFeedbackDto>): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        comment: string | null;
        rating: number;
        eventId: number;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        comment: string | null;
        rating: number;
        eventId: number;
    }>;
}
