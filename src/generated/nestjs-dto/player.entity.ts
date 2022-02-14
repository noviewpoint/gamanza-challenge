import { Prisma } from '@prisma/client';
import { Game } from './game.entity';

export class Player {
  createdAt: Date;
  updatedAt: Date;
  joinedOn: Date;
  id: number;
  firstName: string;
  lastName: string;
  middleName: string | null;
  bornDate: Date;
  email: string;
  activated: boolean | null;
  credits: Prisma.Decimal;
  games?: Game[];
}
