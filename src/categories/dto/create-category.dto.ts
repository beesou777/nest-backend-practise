import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { CategoryType } from '@prisma/client'; // Adjust the import based on your actual path

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(CategoryType)
  type: CategoryType;
}
