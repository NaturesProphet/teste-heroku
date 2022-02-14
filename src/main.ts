import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen( process.env.PORT );
  console.log(`app ouvindo na porta ${process.env.PORT}...`)
}
bootstrap();
