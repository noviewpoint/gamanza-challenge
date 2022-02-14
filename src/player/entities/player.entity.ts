import { Game } from '../../game/entities/game.entity';

export class Player {
  createdAt?: Date;
  updatedAt?: Date;
  joinedOn?: Date;
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  bornDate: Date;
  email: string;
  activated: boolean;
  credits: number;
  games: Game[];
}
