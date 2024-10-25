"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon2 = require("argon2");
const library_1 = require("@prisma/client/runtime/library");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let UsersService = class UsersService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async createUser(data) {
        try {
            const hash = await argon2.hash(data.password);
            data.password = hash;
            const user = this.prisma.user.create({
                data: {
                    email: data.email,
                    name: data.name,
                    companyName: data.companyName,
                    password: data.password,
                    role: data.role,
                },
            });
            delete (await user).password;
            return user;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ForbiddenException('Credentials taken');
                }
            }
        }
    }
    async signIn(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        });
        if (!user)
            throw new common_1.ForbiddenException('Credentials incorrect');
        const pwMtches = await argon2.verify(user.password, dto.password);
        if (!pwMtches)
            throw new common_1.UnauthorizedException();
        return this.signToken(user.id, user.email, user.role);
    }
    async signToken(userId, email, role) {
        const payload = {
            sub: userId,
            email,
            role
        };
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '7d',
            secret
        });
        return {
            access_token: token
        };
    }
    async verifyToken(token) {
        try {
            const secret = this.config.get('JWT_SECRET');
            const user = await this.jwt.verify(token, {
                secret
            });
            return user;
        }
        catch (error) {
            return null;
        }
    }
    async findAll() {
        return this.prisma.user.findMany();
    }
    async findOne(userId) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        if (!user)
            throw new common_1.ForbiddenException('User not found');
        delete user.password;
        return user;
    }
    async updateUser(id, data) {
        return this.prisma.user.update({
            where: { id },
            data,
        });
    }
    async deleteUser(id) {
        return this.prisma.user.delete({
            where: { id },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], UsersService);
//# sourceMappingURL=users.service.js.map