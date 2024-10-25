import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  create(@Body() data: CreateLocationDto) {
    return this.locationsService.create(data);
  }

  @Get()
  findAll() {
    return this.locationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.locationsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<CreateLocationDto>) {
    return this.locationsService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.locationsService.delete(+id);
  }
}
