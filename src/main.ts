import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {cors: true});
    const options = new DocumentBuilder()
        .setTitle('Gillz Dashboard')
        .setDescription('Internal development dashboard')
        .setVersion('1.0')
        .addTag('Gillz')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || 3001);
}

bootstrap();
