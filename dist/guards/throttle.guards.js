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
exports.CustomThrottlerGuard = void 0;
const common_1 = require("@nestjs/common");
const throttler_1 = require("@nestjs/throttler");
const core_1 = require("@nestjs/core");
let CustomThrottlerGuard = class CustomThrottlerGuard extends throttler_1.ThrottlerGuard {
    constructor(options, storageService, reflector) {
        super(options, storageService, reflector);
    }
    async throwThrottlingException(context, throttlerLimitDetail) {
        throw new common_1.HttpException('Too many requests, please try again later', common_1.HttpStatus.TOO_MANY_REQUESTS);
    }
};
exports.CustomThrottlerGuard = CustomThrottlerGuard;
exports.CustomThrottlerGuard = CustomThrottlerGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object, Object, core_1.Reflector])
], CustomThrottlerGuard);
//# sourceMappingURL=throttle.guards.js.map