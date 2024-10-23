import { Module } from '@nestjs/common';
   import { EventsService } from './events.service';
   import { EventsResolver } from './events.controller';
   import { PrismaModule } from '../prisma/prisma.module';

   @Module({
     imports: [PrismaModule],
     providers: [EventsService, EventsResolver],
   })
   export class EventsModule {}