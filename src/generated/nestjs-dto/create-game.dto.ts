export class CreateGameDto {
  startedOn?: Date;
  endedOn?: Date;
  title: string;
  description: string;
  picturesUrls: string[];
}
