import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  async createEvent(createEventInput: CreateEventInput, organizerId: number) {
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

  async updateEvent(updateEventInput: UpdateEventInput) {
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

  async deleteEvent(id: number) {
    await this.prisma.event.delete({ where: { id } });
    return true;
  }

  async getEvent(id: number) {
    return this.prisma.event.findUnique({ where: { id } });
  }

  async getEvents() {
    return this.prisma.event.findMany();
  }

  async searchEvents(searchTerm: string) {
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
}