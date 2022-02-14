import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Gamanza Challenge API')
    .setDescription('The Gamanza Challenge API description')
    .setVersion('1.0')
    .addTag('game')
    .addTag('player')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  process.on('unhandledRejection', (ex: Error) => {
    if (
      ex.message === '"undefined" is not a cacheable value' &&
      ex.stack.includes('cache-manager-redis-store')
    ) {
      // TODO - cache-manager-redis-store has some issues with nest js when accessing keys that dont exist in redis
      return;
    } else {
      throw ex;
    }
  });
  await app.listen(3000);
}
bootstrap();
