import { Game } from '../../game/entities/game.entity';

export class Player {
  createdAt?: Date;
  updatedAt?: Date;
  joinedOn?: Date;
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  bornDate: Date;
  activated: boolean;
  credits: number;
  games?: Game[];
}
