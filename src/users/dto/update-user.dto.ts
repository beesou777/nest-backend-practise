import { IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  companyName?: string;
}
