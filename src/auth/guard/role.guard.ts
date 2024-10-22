import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector, private jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());

        if (!requiredRoles) return true;

        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        if (!authHeader) throw new ForbiddenException('No token found');

        const token = authHeader.split(' ')[1];
        const decoded = this.jwtService.decode(token) as { role: string };

        return requiredRoles.includes(decoded.role);
    }
}
