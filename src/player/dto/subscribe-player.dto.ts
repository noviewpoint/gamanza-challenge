import { IsArray, IsDefined, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SubscribePlayerDto {
  @ApiProperty()
  @IsDefined()
  @IsNumber()
  playerId: number;
  @ApiProperty()
  @IsDefined()
  @IsArray()
  gamesIds: number[];
}
