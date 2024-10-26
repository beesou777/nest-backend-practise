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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const dto_1 = require("./dto");
const auth_guard_1 = require("./guards/auth.guard");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    createUser(data) {
        return this.usersService.createUser(data);
    }
    signIn(dto) {
        return this.usersService.signIn(dto);
    }
    getProfile(req) {
        const userId = req?.user.sub;
        if (!userId)
            throw new common_1.UnauthorizedException("User ID not found");
        return this.usersService.getUserProfile(+userId);
    }
    updateUser(req, data) {
        const userId = req?.user.sub;
        if (!userId)
            throw new common_1.UnauthorizedException("User ID not found");
        return this.usersService.updateUser(+userId, data);
    }
    changePassword(req, data) {
        const userId = req?.user.sub;
        if (!userId)
            throw new common_1.UnauthorizedException("User ID not found");
        return this.usersService.changePassword(+userId, data);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SigninUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "signIn", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getProfile", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Put)('change-password'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.ChangePasswordDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "changePassword", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map