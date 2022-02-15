import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPlayerDto } from './dto/find-player.dto';
import { SubscribePlayerDto } from './dto/subscribe-player.dto';

@ApiTags('player')
@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Post('/subscripe')
  subscribeToGame(@Body() subscribePlayerDto: SubscribePlayerDto) {
    return this.playerService.subscribeToGame(subscribePlayerDto);
  }

  @Post('/unsubscribe')
  unsubscribeFromGame(@Body() subscribePlayerDto: SubscribePlayerDto) {
    return this.playerService.unsubscribeFromGame(subscribePlayerDto);
  }

  @Get()
  findAll(@Query() findPlayerDto: FindPlayerDto) {
    // can search by firstName and lastName (case insensitive)
    // can query players by game
    return this.playerService.findAll(findPlayerDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(+id, updatePlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}
