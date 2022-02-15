import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FindPlayerDto {
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
  gameId?: number;
}
