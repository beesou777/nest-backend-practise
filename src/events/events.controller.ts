import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-evnet.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() data: CreateEventDto) {
    return this.eventsService.create(data);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(id);
    return this.eventsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<CreateEventDto>) {
    return this.eventsService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.eventsService.delete(+id);
  }
}
