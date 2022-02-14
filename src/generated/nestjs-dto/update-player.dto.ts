import { Prisma } from '@prisma/client';

export class UpdatePlayerDto {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  bornDate?: Date;
  email?: string;
  activated?: boolean;
  credits?: Prisma.Decimal;
}
