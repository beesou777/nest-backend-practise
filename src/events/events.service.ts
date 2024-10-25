import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-evnet.dto';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEventDto) {
    return this.prisma.event.create({ data });
  }

  async findAll() {
    return this.prisma.event.findMany();
  }

  async findOne(id: number) {
    return this.prisma.event.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<CreateEventDto>) {
    return this.prisma.event.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.event.delete({ where: { id } });
  }
}
