import { IsInt, IsString } from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  comment: string;

  @IsInt()
  rating: number;

  @IsInt()
  userId: number;

  @IsInt()
  eventId: number;
}
