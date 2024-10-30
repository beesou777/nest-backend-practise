import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto,UpdateSupplierDto } from './dto';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  // @Post()
  // async create(@Body() createSupplierDto: CreateSupplierDto) {
  //   return await this.suppliersService.create(createSupplierDto);
  // }

  @Get()
  async findAll() {
    return await this.suppliersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.suppliersService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSupplierDto: UpdateSupplierDto,
  ) {
    return await this.suppliersService.update(+id, updateSupplierDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.suppliersService.remove(+id);
  }
}
