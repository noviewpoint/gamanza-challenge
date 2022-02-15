import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from '../prisma.service';
import { Game } from './entities/game.entity';
import { FindGameDto } from './dto/find-game.dto';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async create(createGameDto: CreateGameDto): Promise<Game> {
    try {
      const game = await this.prisma.game.create({
        data: createGameDto,
      });
      return game;
    } catch (ex) {
      return ex.message.toString();
    }
  }

  async findAll({
    skip,
    limit,
    title,
    playerId,
  }: FindGameDto): Promise<Game[]> {
    const query = {
      skip,
      take: limit,
      where: undefined,
    };
    if (title) {
      query.where = {};
      Object.assign(query.where, {
        title: { contains: title, mode: 'insensitive' },
      });
    }
    if (playerId) {
      query.where = query.where || {};
      Object.assign(query.where, {
        players: {
          some: {
            player: {
              id: playerId,
            },
          },
        },
      });
    }
    try {
      const games = await this.prisma.game.findMany(query);
      return games;
    } catch (ex) {
      return ex.message.toString();
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
        return game;
      }
    } catch (ex) {
      return ex.message.toString();
    }
  }

  async update(id: number, updateGameDto: UpdateGameDto): Promise<Game> {
    try {
      const game = await this.prisma.game.update({
        data: updateGameDto,
        where: { id },
      });
      return game;
    } catch (ex) {
      return ex.message.toString();
    }
  }

  async remove(id: number): Promise<Game> {
    try {
      const game = await this.prisma.game.delete({
        where: { id },
      });
      return game;
    } catch (ex) {
      return ex.message.toString();
    }
  }
}
