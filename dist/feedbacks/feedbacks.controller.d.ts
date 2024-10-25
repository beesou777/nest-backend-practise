import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
export declare class FeedbacksController {
    private readonly feedbacksService;
    constructor(feedbacksService: FeedbacksService);
    create(data: CreateFeedbackDto): Promise<{
        id: number;
        createdAt: Date;
        comment: string | null;
        rating: number;
        userId: number;
        eventId: number;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        comment: string | null;
        rating: number;
        userId: number;
        eventId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        comment: string | null;
        rating: number;
        userId: number;
        eventId: number;
    }>;
    update(id: number, data: Partial<CreateFeedbackDto>): Promise<{
        id: number;
        createdAt: Date;
        comment: string | null;
        rating: number;
        userId: number;
        eventId: number;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        comment: string | null;
        rating: number;
        userId: number;
        eventId: number;
    }>;
}
