import { IsEmail, IsString, IsNotEmpty, IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class SigninUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

}
