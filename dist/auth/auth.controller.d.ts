import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        contactInfo: string | null;
        createdAt: Date;
    }>;
    signin(dto: AuthDto): Promise<{
        access_token: string;
    }>;
}
