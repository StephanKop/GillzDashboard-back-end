import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeadlinesEntity } from './deadlines.entity';

@Module({
    imports: [TypeOrmModule.forFeature([DeadlinesEntity])],
    exports: [TypeOrmModule]
})
export class DeadlinesModule {}