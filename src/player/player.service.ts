import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const data = { ...createPlayerDto };
    try {
      const player = await this.prisma.player.create({
        data,
      });
      return {
        games: [],
        ...player,
        credits: player.credits as unknown as number,
      };
    } catch (ex) {
      return ex.toString();
    }
  }

  async findAll({
    skip,
    limit,
    firstName,
    lastName,
  }: {
    skip?: number;
    limit?: number;
    firstName?: string;
    lastName?: string;
  }): Promise<Player[]> {
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
    try {
      const players = await this.prisma.player.findMany(query);
      return players.map((player) => {
        return {
          games: [],
          ...player,
          credits: player.credits as unknown as number,
        };
      });
    } catch (ex) {
      return ex.toString();
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
          games: [],
          ...player,
          credits: player.credits as unknown as number,
        };
      }
    } catch (ex) {
      return ex.toString();
    }
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    const data = { ...updatePlayerDto } as Prisma.PlayerUpdateInput;
    try {
      const player = await this.prisma.player.update({
        data,
        where: { id },
      });
      return {
        games: [],
        ...player,
        credits: player.credits as unknown as number,
      };
    } catch (ex) {
      return ex.toString();
    }
  }

  async remove(id: number): Promise<Player> {
    try {
      const player = await this.prisma.player.delete({
        where: { id },
      });
      return {
        games: [],
        ...player,
        credits: player.credits as unknown as number,
      };
    } catch (ex) {
      return ex.toString();
    }
  }
}
