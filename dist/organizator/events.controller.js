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
exports.EventsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const events_service_1 = require("./events.service");
const common_1 = require("@nestjs/common");
const roles_guard_1 = require("../auth/guard/roles.guard");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
const client_1 = require("@prisma/client");
let EventsResolver = class EventsResolver {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    async createEvent(title, description) {
        return true;
    }
    async deleteEvent(id) {
        return true;
    }
    async events() {
        return [];
    }
};
exports.EventsResolver = EventsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, roles_decorator_1.Roles)(client_1.Role.Organizer),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __param(0, (0, graphql_1.Args)('title')),
    __param(1, (0, graphql_1.Args)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], EventsResolver.prototype, "createEvent", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, roles_decorator_1.Roles)(client_1.Role.Organizer),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EventsResolver.prototype, "deleteEvent", null);
__decorate([
    (0, graphql_1.Query)(() => [Event]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventsResolver.prototype, "events", null);
exports.EventsResolver = EventsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [events_service_1.EventsService])
], EventsResolver);
//# sourceMappingURL=events.controller.js.map