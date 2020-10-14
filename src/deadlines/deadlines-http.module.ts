import { Module } from '@nestjs/common';
import { DeadlinesModule } from './deadlines.module';
import { DeadlinesService } from './deadlines.service';
import { DeadlinesController } from './deadlines.controller';

@Module({
    imports: [DeadlinesModule],
    providers: [DeadlinesService],
    controllers: [DeadlinesController]
})
export class UserHttpModule {}
