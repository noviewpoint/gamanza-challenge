import {
  IsArray,
  IsDateString,
  IsDefined,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Player } from '../../generated/nestjs-dto/player.entity';

export class CreateGameDto {
  @ApiProperty()
  @IsOptional()
  @IsDateString()
  startedOn?: Date;
  @ApiProperty()
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
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  players: Player[];
  @ApiProperty()
  @IsDefined()
  @IsArray()
  @IsString({ each: true })
  picturesUrls: string[];
}
