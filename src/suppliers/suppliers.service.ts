import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSupplierDto,UpdateSupplierDto } from './dto';


@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaService) {}

  // async create(createSupplierDto: CreateSupplierDto) {
  //   try {
  //     return await this.prisma.supplier.create({
  //       data: createSupplierDto,
  //     });
  //   } catch (error) {
  //     if (error.code === 'P2002') {
  //       throw new ConflictException('Supplier with this email already exists.');
  //     }
  //     throw error;
  //   }
  // }

  async findAll() {
    return await this.prisma.supplier.findMany();
  }

  async findOne(id: number) {
    const supplier = await this.prisma.supplier.findUnique({ where: { id } });
    if (!supplier) {
      throw new NotFoundException(`Supplier with ID ${id} not found.`);
    }
    return supplier;
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    await this.findOne(id); // Ensure supplier exists
    return await this.prisma.supplier.update({
      where: { id },
      data: updateSupplierDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Ensure supplier exists
    return await this.prisma.supplier.delete({ where: { id } });
  }
}
