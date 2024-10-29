// src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module'; 
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { CategoriesModule } from './categories/categories.module';
import { LocationsModule } from './locations/locations.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { CustomThrottlerGuard } from './guards/throttle.guards';
import { SuppliersModule } from './suppliers/suppliers.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UsersModule,
    EventsModule,
    CategoriesModule,
    LocationsModule,
    FeedbacksModule,
    SuppliersModule,
  ],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: CustomThrottlerGuard,
    }
  ],
})
export class AppModule {}
