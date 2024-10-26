import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enhanced security headers with Helmet
  app.use(helmet({
    crossOriginEmbedderPolicy: true,
    crossOriginOpenerPolicy: { policy: 'same-origin' },
    crossOriginResourcePolicy: { policy: 'same-origin' },
    hidePoweredBy: true,
    frameguard: { action: 'deny' }, // Prevents clickjacking attacks
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true }, // Enforces HTTPS
    xssFilter: true, // Adds X-XSS-Protection header for XSS mitigation
    noSniff: true, // Prevents browsers from MIME-sniffing responses
  }));

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

  // Set global route prefix and validation
  app.setGlobalPrefix('api/v1');



  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  await app.listen(process.env.PORT ?? 8000);
}

bootstrap();
