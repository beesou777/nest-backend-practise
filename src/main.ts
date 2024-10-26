import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { doubleCsrf } from 'csrf-csrf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security headers with Helmet
  app.use(helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    crossOriginResourcePolicy: false,
    hidePoweredBy: true,
  }));

  // CORS setup
  const allowlist = ['http://localhost:3000', 'http://localhost:5173', 'https://eventeir.ai'];
  
  const corsOptionsDelegate = (req: any, callback: any) => {
    const corsOptions = allowlist.indexOf(req.header('Origin')) !== -1
      ? { origin: true }
      : { origin: false };
    callback(null, corsOptions);
  };

  app.enableCors(corsOptionsDelegate);


   
  // Swagger setup
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Eventeir')
    .setDescription('API documentation for Eventeir')
    .setVersion('1.0')
    .build();
  
  const createDocument = () => SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/v1/doc', app, createDocument());
  
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  
  await app.listen(process.env.PORT ?? 8000);
}

bootstrap();
