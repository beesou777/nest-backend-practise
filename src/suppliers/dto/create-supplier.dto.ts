import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  @Length(2, 50)
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Length(10, 15)
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;
}
