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
        id: number;
        email: string;
        password: string;
        name: string;
        phone: string | null;
        isVerified: boolean;
        role: import(".prisma/client").$Enums.UserRole;
        companyName: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};
