import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto,UpdateCategoryDto } from './dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const checkExist = await this.prisma.category.findFirst({
      where: {
        name: createCategoryDto.name,
        type: createCategoryDto.type
      }
    })
    if(checkExist && checkExist.name === createCategoryDto.name && checkExist.type === createCategoryDto.type) throw new BadRequestException(`Category with name ${createCategoryDto.name} already exists`)
    if(checkExist && checkExist.type === createCategoryDto.type) throw new BadRequestException(`Category with type ${createCategoryDto.type} already exists`)
    return this.prisma.category.create({
      data: createCategoryDto,
    });
  }

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findOne(id: number) {
    const category = await this.prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.findOne(id);
  
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
  
    const checkExist = await this.prisma.category.findFirst({
      where: {
        id: { not: id }, // this will not include the current id 
        name: updateCategoryDto.name,
        type: updateCategoryDto.type,
      },
    });
  
    if (checkExist) {
      throw new BadRequestException(`Category with name ${updateCategoryDto.name} and type ${updateCategoryDto.type} already exists`);
    }
  
    return this.prisma.category.update({
      where: { id: category.id },
      data: updateCategoryDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.category.delete({
      where: { id },
    });
  }
}
