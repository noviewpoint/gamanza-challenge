import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDate,
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
  @IsDate()
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
  @IsOptional()
  @IsDate()
  bornDate: Date;
  @ApiProperty()
  @IsDefined()
  @IsEmail()
  email: Date;
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  activated: boolean;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  credits: number;
  @ApiProperty()
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  games: Game[];
}
