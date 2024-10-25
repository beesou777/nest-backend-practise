import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() data: CreateCategoryDto) {
    return this.categoriesService.create(data);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.categoriesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<CreateCategoryDto>) {
    return this.categoriesService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.categoriesService.delete(+id);
  }
}
