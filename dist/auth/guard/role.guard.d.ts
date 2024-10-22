import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
export declare class RolesGuard implements CanActivate {
    private reflector;
    private jwtService;
    constructor(reflector: Reflector, jwtService: JwtService);
    canActivate(context: ExecutionContext): boolean;
}
