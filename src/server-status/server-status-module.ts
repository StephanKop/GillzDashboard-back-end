import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ServerStatusEntity} from './server-status.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ServerStatusEntity])],
    exports: [TypeOrmModule]
})
export class ServerStatusModule {
}