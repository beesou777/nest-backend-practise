declare class UpdateTicketInput {
    name: string;
    price: number;
    quantity: number;
}
export declare class UpdateEventInput {
    id: number;
    title?: string;
    description?: string;
    venue?: string;
    date?: Date;
    tickets?: UpdateTicketInput[];
}
export {};
