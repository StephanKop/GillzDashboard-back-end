import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerStatusService } from './server-status/server-status.service';
import { ServerStatusController } from './server-status/server-status.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';
import { DeadlinesService } from './deadlines/deadlines.service';
import { DeadlinesController } from './deadlines/deadlines.controller';

@Module({
  imports: [TerminusModule],
  controllers: [AppController, ServerStatusController, HealthController, DeadlinesController],
  providers: [AppService, ServerStatusService, DeadlinesService],
})
export class AppModule {}
