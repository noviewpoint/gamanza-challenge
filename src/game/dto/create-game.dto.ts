import {
  IsArray,
  IsDateString,
  IsDefined,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateGameDto {
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  startedOn?: Date;
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  endedOn?: Date;
  @ApiProperty()
  @IsDefined()
  @IsString()
  title: string;
  @ApiProperty()
  @IsDefined()
  @IsString()
  description: string;
  @ApiProperty()
  @IsDefined()
  @IsArray()
  picturesUrls: string[];
  // game dto should not have players
}
