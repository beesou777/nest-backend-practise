import { UserRole } from '@prisma/client';
export declare class CreateUserDto {
    email: string;
    password: string;
    name: string;
    companyName?: string;
    role: UserRole;
}
