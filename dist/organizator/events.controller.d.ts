import { EventsService } from './events.service';
export declare class EventsResolver {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    createEvent(title: string, description: string): Promise<boolean>;
    deleteEvent(id: number): Promise<boolean>;
    events(): Promise<any[]>;
}
