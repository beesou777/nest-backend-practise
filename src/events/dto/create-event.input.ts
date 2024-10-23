import { IsString, IsOptional, IsArray, ValidateNested, IsDate, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class CreateTicketInput {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;
}

export class CreateEventInput {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  venue: string;

  @IsDate()
  date: Date;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTicketInput)
  tickets: CreateTicketInput[];
}
