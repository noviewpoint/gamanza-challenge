import {
  IsString,
  IsArray,
  ValidateNested,
  IsDefined,
  IsDate,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Player } from '../../generated/nestjs-dto/player.entity';

export class CreateGameDto {
  @ApiProperty()
  @IsOptional()
  @IsDate()
  startedOn: Date;
  @ApiProperty()
  @IsOptional()
  @IsDate()
  endedOn: Date;
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
  @ValidateNested({ each: true })
  players: Player[];
  @ApiProperty()
  @IsDefined()
  @IsArray()
  @IsString({ each: true })
  picturesUrls: string[];
}
