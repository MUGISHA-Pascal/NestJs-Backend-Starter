import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
  @ApiProperty()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string | null;
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  verified?: boolean;
}
