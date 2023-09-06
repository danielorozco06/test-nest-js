import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const DEFAULT_PORT = 3000;
  const port = process.env.PORT || DEFAULT_PORT;
  await app.listen(port);
}
bootstrap();
