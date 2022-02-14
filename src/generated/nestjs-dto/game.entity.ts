import { Player } from './player.entity';

export class Game {
  createdAt: Date;
  updatedAt: Date;
  startedOn: Date | null;
  endedOn: Date | null;
  id: number;
  title: string;
  description: string;
  players?: Player[];
  picturesUrls: string[];
}
