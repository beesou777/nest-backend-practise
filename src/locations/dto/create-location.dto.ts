import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  state : string

  @IsInt()
  @IsNotEmpty()
  lat : number

  @IsInt()
  @IsNotEmpty()
  long : number

  @IsString()
  postalCode?: string
}
