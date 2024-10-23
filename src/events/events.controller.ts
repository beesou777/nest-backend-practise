import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { EventsService } from './events.service';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Roles } from '../auth/decorator/roles.decorator';
import { Role } from '@prisma/client';

@Resolver()
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Mutation(() => Boolean)
  @Roles(Role.Organizer)
  @UseGuards(RolesGuard)
  async createEvent(
    @Args('title') title: string,
    @Args('description') description: string,
    // Add other event fields
  ) {
    // Call service method to create event
    return true;
  }

  @Mutation(() => Boolean)
  @Roles(Role.Organizer)
  @UseGuards(RolesGuard)
  async deleteEvent(@Args('id') id: number) {
    // Call service method to delete event
    return true;
  }

  @Query(() => [Event])
  async events() {
    // Call service method to get events
    return [];
  }
}