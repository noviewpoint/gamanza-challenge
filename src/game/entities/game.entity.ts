import { Player } from '../../generated/nestjs-dto/player.entity';

export class Game {
  createdAt?: Date;
  updatedAt?: Date;
  startedOn?: Date;
  endedOn?: Date;
  id: number;
  title: string;
  description: string;
  players: Player[];
  picturesUrls: string[];
}
