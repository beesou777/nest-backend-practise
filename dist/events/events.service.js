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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EventsService = class EventsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createEvent(createEventInput, organizerId) {
        const { tickets, ...eventData } = createEventInput;
        const event = await this.prisma.event.create({
            data: {
                ...eventData,
                organizer: { connect: { id: organizerId } },
                tickets: {
                    create: tickets,
                },
            },
        });
        return event;
    }
    async updateEvent(updateEventInput) {
        const { id, tickets, ...eventData } = updateEventInput;
        const event = await this.prisma.event.update({
            where: { id },
            data: {
                ...eventData,
                tickets: {
                    deleteMany: { eventId: id },
                    create: tickets,
                },
            },
        });
        return event;
    }
    async deleteEvent(id) {
        await this.prisma.event.delete({ where: { id } });
        return true;
    }
    async getEvent(id) {
        return this.prisma.event.findUnique({ where: { id } });
    }
    async getEvents() {
        return this.prisma.event.findMany();
    }
    async searchEvents(searchTerm) {
        return this.prisma.event.findMany({
            where: {
                OR: [
                    { title: { contains: searchTerm, mode: 'insensitive' } },
                    { description: { contains: searchTerm, mode: 'insensitive' } },
                    { venue: { contains: searchTerm, mode: 'insensitive' } },
                ],
            },
        });
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EventsService);
//# sourceMappingURL=events.service.js.map