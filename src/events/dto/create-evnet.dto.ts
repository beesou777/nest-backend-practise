import { IsString, IsDate, IsInt } from 'class-validator';

export class CreateEventDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDate()
  date: Date;

  @IsString()
  time: string;

  @IsString()
  venue: string;

  @IsInt()
  organizerId: number;

  @IsInt()
  categoryId: number;

  @IsInt()
  locationId: number;
}
