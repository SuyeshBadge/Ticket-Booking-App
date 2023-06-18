import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Request validation settings
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      errorHttpStatusCode: 422,
    }),
  );

  const timezone = process.env.TIMEZONE || 'UTC'; // Retrieve the time zone from the environment variable
  process.env.TZ = timezone;

  await app.listen(2023);
}
bootstrap();
