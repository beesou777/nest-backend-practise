import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
export declare class FeedbacksController {
    private readonly feedbacksService;
    constructor(feedbacksService: FeedbacksService);
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
