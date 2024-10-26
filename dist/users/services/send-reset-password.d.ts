export declare class MailService {
    private transporter;
    constructor();
    sendPasswordResetEmail(to: string, token: string): Promise<void>;
}
