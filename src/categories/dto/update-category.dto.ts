import { IsOptional, IsString, IsEnum } from 'class-validator';
import { CategoryType } from '@prisma/client'; // Adjust the import based on your actual path

export class UpdateCategoryDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(CategoryType)
  type?: CategoryType;
}
