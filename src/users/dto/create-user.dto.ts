import { IsEmail, IsString, IsOptional, IsNotEmpty, IsEnum } from 'class-validator';
import { Role } from '../enum/role.enum';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  companyName?: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}
