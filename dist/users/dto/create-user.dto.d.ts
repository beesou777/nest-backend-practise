import { Role } from '../enum/role.enum';
export declare class CreateUserDto {
    email: string;
    password: string;
    name: string;
    companyName?: string;
    role: Role;
}
