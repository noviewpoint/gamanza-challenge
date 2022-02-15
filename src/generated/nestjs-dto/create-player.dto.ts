export class CreatePlayerDto {
  firstName: string;
  lastName: string;
  middleName?: string;
  bornDate: Date;
  email: string;
  activated?: boolean;
}
