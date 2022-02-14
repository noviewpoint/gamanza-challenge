import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async create(createGameDto: CreateGameDto): Promise<Game> {
    const data = { ...createGameDto };
    try {
      const game = await this.prisma.game.create({
        data,
      });
      return { players: [], ...game };
    } catch (ex) {
      return ex.toString();
    }
  }

  async findAll({
    skip,
    limit,
  }: {
    skip?: number;
    limit?: number;
  }): Promise<Game[]> {
    try {
      const games = await this.prisma.game.findMany({
        skip,
        take: limit,
      });
      return games.map((game) => {
        return { players: [], ...game };
      });
    } catch (ex) {
      return ex.toString();
    }
  }

  async findOne(id: number): Promise<Game> {
    try {
      const game = await this.prisma.game.findUnique({
        where: {
          id,
        },
      });
      if (game) {
        return { players: [], ...game };
      }
    } catch (ex) {
      return ex.toString();
    }
  }

  async update(id: number, updateGameDto: UpdateGameDto): Promise<Game> {
    const data = { ...updateGameDto } as Prisma.GameUpdateInput;
    try {
      const game = await this.prisma.game.update({
        data,
        where: { id },
      });
      return { players: [], ...game };
    } catch (ex) {
      return ex.toString();
    }
  }

  async remove(id: number): Promise<Game> {
    try {
      const game = await this.prisma.game.delete({
        where: { id },
      });
      return { players: [], ...game };
    } catch (ex) {
      return ex.toString();
    }
  }
}
