import { CacheModule, Module, CacheInterceptor } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { PlayerModule } from './player/player.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import type { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      isGlobal: true,
      ttl: 30, // seconds
      store: redisStore,
      socket: {
        host: 'localhost',
        port: 6379,
      },
    }),
    GameModule,
    PlayerModule,
  ],
  controllers: [AppController],
  providers: [
    // Only GET endpoints are cached.
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    AppService,
  ],
})
export class AppModule {}
