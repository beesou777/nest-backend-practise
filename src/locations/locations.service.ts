import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: PrismaService) {}

  // async create(data: CreateLocationDto) {
  //   return this.prisma.location.create({ data });
  // }
 
  async findAll() {
    return this.prisma.location.findMany();
  }

  async findOne(id: number) {
    return this.prisma.location.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<CreateLocationDto>) {
    return this.prisma.location.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.location.delete({ where: { id } });
  }
}
