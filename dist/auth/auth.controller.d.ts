import { AuthService } from './auth.service';
import { SignupDto, SigninDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: SignupDto): Promise<{
        email: string;
        password: string;
        name: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        contactInfo: string | null;
        createdAt: Date;
    }>;
    signin(dto: SigninDto): Promise<{
        access_token: string;
    }>;
    user(headers: Record<string, string>): Promise<{
        email: string;
        password: string;
        name: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        contactInfo: string | null;
        createdAt: Date;
    }>;
}
