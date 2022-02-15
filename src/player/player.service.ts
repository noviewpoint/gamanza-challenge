import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from '../prisma.service';
import { Player } from './entities/player.entity';
import { SubscribePlayerDto } from './dto/subscribe-player.dto';
import { FindPlayerDto } from './dto/find-player.dto';

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    try {
      const player = await this.prisma.player.create({
        data: createPlayerDto,
      });
      return {
        ...player,
        credits: player.credits as unknown as number,
      };
    } catch (ex) {
      return ex.message.toString();
    }
  }

  async subscribeToGame(subscribePlayerDto: SubscribePlayerDto) {
    const { playerId, gamesIds } = subscribePlayerDto;
    try {
      const subscribedPlayer = await this.prisma.playersOnGames.createMany({
        data: gamesIds.map((gameId) => ({ playerId, gameId })),
      });
      return subscribedPlayer;
    } catch (ex) {
      return ex.message.toString();
    }
  }

  async unsubscribeFromGame(subscribePlayerDto: SubscribePlayerDto) {
    const { playerId, gamesIds } = subscribePlayerDto;
    try {
      const unsubscribedPlayer = await this.prisma.playersOnGames.deleteMany({
        where: {
          playerId: playerId,
          gameId: {
            in: gamesIds,
          },
        },
      });
      return unsubscribedPlayer;
    } catch (ex) {
      return ex.message.toString();
    }
  }

  async findAll({
    skip,
    limit,
    firstName,
    lastName,
    gameId,
  }: FindPlayerDto): Promise<Player[]> {
    const query = {
      skip,
      take: limit,
      where: undefined,
    };
    if (firstName) {
      query.where = {};
      Object.assign(query.where, {
        firstName: { contains: firstName, mode: 'insensitive' },
      });
    }
    if (lastName) {
      query.where = query.where || {};
      Object.assign(query.where, {
        lastName: { contains: lastName, mode: 'insensitive' },
      });
    }
    if (gameId) {
      query.where = query.where || {};
      Object.assign(query.where, {
        games: {
          some: {
            game: {
              id: gameId,
            },
          },
        },
      });
    }
    try {
      const players = await this.prisma.player.findMany(query);
      return players.map((player) => {
        return {
          ...player,
          credits: player.credits as unknown as number,
        };
      });
    } catch (ex) {
      return ex.message.toString();
    }
  }

  async findOne(id: number): Promise<Player> {
    try {
      const player = await this.prisma.player.findUnique({
        where: {
          id,
        },
      });
      if (player) {
        return {
          ...player,
          credits: player.credits as unknown as number,
        };
      }
    } catch (ex) {
      return ex.message.toString();
    }
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    try {
      const player = await this.prisma.player.update({
        data: updatePlayerDto,
        where: { id },
      });
      return {
        ...player,
        credits: player.credits as unknown as number,
      };
    } catch (ex) {
      return ex.message.toString();
    }
  }

  async remove(id: number): Promise<Player> {
    try {
      const player = await this.prisma.player.delete({
        where: { id },
      });
      return {
        ...player,
        credits: player.credits as unknown as number,
      };
    } catch (ex) {
      return ex.message.toString();
    }
  }
}
