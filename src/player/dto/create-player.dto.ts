import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsDefined,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Game } from '../../game/entities/game.entity';

export class CreatePlayerDto {
  @ApiProperty()
  @IsOptional()
  @IsDateString()
  joinedOn: Date;
  @ApiProperty()
  @IsDefined()
  @IsString()
  firstName: string;
  @ApiProperty()
  @IsDefined()
  @IsString()
  lastName: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  middleName?: string;
  @ApiProperty()
  @IsDefined()
  @IsDateString()
  bornDate: Date;
  @ApiProperty()
  @IsDefined()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  activated: boolean;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  credits: number;
  @ApiProperty()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  games: Game[];
}
