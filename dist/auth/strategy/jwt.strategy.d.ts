import { ConfigService } from "@nestjs/config";
import { PrismaService } from "src/prisma/prisma.service";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(playload: {
        sub: number;
        email: string;
    }): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        contactInfo: string | null;
        createdAt: Date;
    }>;
}
export {};
