"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const helmet_1 = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, helmet_1.default)({
        crossOriginEmbedderPolicy: false,
        crossOriginOpenerPolicy: false,
        crossOriginResourcePolicy: false,
        hidePoweredBy: true,
    }));
    var allowlist = ['http://localhost:3000', 'http://localhost:5173', 'https://eventeir.ai'];
    var corsOptionsDelegate = function (req, callback) {
        var corsOptions;
        if (allowlist.indexOf(req.header('Origin')) !== -1) {
            corsOptions = { origin: true };
        }
        else {
            corsOptions = { origin: false };
        }
        callback(null, corsOptions);
    };
    app.enableCors(corsOptionsDelegate);
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Eventeir')
        .setDescription('API documentation for Eventeir')
        .setVersion('1.0')
        .build();
    const createDocument = () => swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api/v1/doc', app, createDocument());
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
//# sourceMappingURL=main.js.map