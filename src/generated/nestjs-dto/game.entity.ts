import { Player } from './player.entity';

export class Game {
  createdAt: Date;
  updatedAt: Date;
  id: number;
  title: string;
  description: string | null;
  players?: Player[];
  picturesUrls: string[];
}
