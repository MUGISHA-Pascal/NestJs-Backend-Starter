import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  title: string;
  @IsString()
  @MaxLength(300)
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  description?: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  body: string;
  @IsOptional()
  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  published?: boolean;
  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false, nullable: true })
  authorId?: number;
}
