import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';  // Importing PrismaModule
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { CategoriesModule } from './categories/categories.module';
import { LocationsModule } from './locations/locations.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UsersModule,
    EventsModule,
    CategoriesModule,
    LocationsModule,
    FeedbacksModule,
  ],
})
export class AppModule {}
