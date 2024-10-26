import { ConfigService } from "@nestjs/config";
import { PrismaService } from "src/prisma/prisma.service";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: number;
        email: string;
    }): Promise<{
        email: string;
        password: string;
        name: string;
        companyName: string | null;
        role: import(".prisma/client").$Enums.UserRole;
        id: number;
        phone: string | null;
        isVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        isUserBlocked: boolean;
        blockedAt: Date | null;
        failedAttempts: number;
    }>;
}
export {};
