import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { UpdateCategoryDto,CreateCategoryDto } from './dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
@Controller('categories')
@Throttle({default:{limit:10,ttl:6000}})
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  //  admin only , login required guard is left
  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto)
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id',new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: string) {
    return this.categoryService.findOne(+id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Put(':id')
  update(@Param('id',new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: string) {
    return this.categoryService.remove(+id);
  }
}
