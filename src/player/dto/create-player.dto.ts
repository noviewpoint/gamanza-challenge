import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsDefined,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePlayerDto {
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  joinedOn: Date;
  @ApiProperty()
  @IsDefined()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsDefined()
  @IsString()
  firstName: string;
  @ApiProperty()
  @IsDefined()
  @IsString()
  lastName: string;
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  middleName?: string;
  @ApiProperty()
  @IsDefined()
  @IsDateString()
  bornDate: Date;
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  activated: boolean;
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  credits: number;
  // player dto should not have games
}
