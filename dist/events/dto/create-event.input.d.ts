declare class CreateTicketInput {
    name: string;
    price: number;
    quantity: number;
}
export declare class CreateEventInput {
    title: string;
    description: string;
    venue: string;
    date: Date;
    tickets: CreateTicketInput[];
}
export {};
