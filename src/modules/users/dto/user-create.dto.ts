import {
  IsAlphanumeric,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class UserCreateDto {
  @MaxLength(30)
  @IsString()
  @IsNotEmpty()
  username: string;


  name?: string;


  biograph?: string;

  graduation_course?: string;


  academic_level?: string;

  year_conclusion?: number;


  link?: string;


  email?: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  university_id?: never;
}
