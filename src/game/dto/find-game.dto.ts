import {
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class FindGameDto {
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  skip?: number;
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  limit?: number;
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title?: string;
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  playerId?: number;
}
