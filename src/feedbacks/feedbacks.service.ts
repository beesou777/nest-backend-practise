import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbacksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateFeedbackDto) {
    return this.prisma.feedback.create({ data });
  }

  async findAll() {
    return this.prisma.feedback.findMany();
  }

  async findOne(id: number) {
    return this.prisma.feedback.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<CreateFeedbackDto>) {
    return this.prisma.feedback.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.feedback.delete({ where: { id } });
  }
}
