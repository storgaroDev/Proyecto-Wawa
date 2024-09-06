import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Ajusta esto al puerto de tu frontend
    credentials: true,
  });
  await app.listen(8080);
}
bootstrap();
