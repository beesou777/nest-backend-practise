import { IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  address: string;

  @IsString()
  state : string
}
