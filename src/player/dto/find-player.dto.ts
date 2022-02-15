import {
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class FindPlayerDto {
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
  firstName?: string;
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  lastName?: string;
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  gameId?: number;
}
