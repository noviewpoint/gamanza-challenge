import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FindGameDto {
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  skip?: number;
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
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
  playerId?: number;
}
