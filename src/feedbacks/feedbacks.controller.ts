import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}

  @Post()
  create(@Body() data: CreateFeedbackDto) {
    return this.feedbacksService.create(data);
  }

  @Get()
  findAll() {
    return this.feedbacksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.feedbacksService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<CreateFeedbackDto>) {
    return this.feedbacksService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.feedbacksService.delete(+id);
  }
}
