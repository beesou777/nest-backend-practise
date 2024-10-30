import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UserRole } from '@prisma/client'; // Adjust import based on your UserRole definition

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Assuming user is added to request by some auth middleware

    return user && user.role === UserRole.ADMIN; // Adjust this according to your role structure
  }
}
