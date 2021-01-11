import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ServerStatusService} from './server-status/server-status.service';
import {ServerStatusController} from './server-status/server-status.controller';
import {TerminusModule} from '@nestjs/terminus';
import {HealthController} from './health/health.controller';
import {DeadlinesService} from './deadlines/deadlines.service';
import {DeadlinesController} from './deadlines/deadlines.controller';
import {DeadlinesEntity} from './deadlines/deadlines.entity';
import {DeadlinesModule} from './deadlines/deadlines.module';
import {MembersModule} from './members/members.module';
import {MemberEntity} from './members/entities/member.entity';
import {ServerStatusModule} from './server-status/server-status-module';
import {ServerStatusEntity} from './server-status/server-status.entity';
import {NotesModule} from './notes/notes.module';
import {NoteEntity} from './notes/entities/note.entity';
import {NotesController} from './notes/notes.controller';
import {NotesService} from './notes/notes.service';
import {MembersService} from './members/members.service';
import {MembersController} from './members/members.controller';
import {ZendeskService} from './zendesk/zendesk.service';
import {ZendeskController} from './zendesk/zendesk.controller';
import {ZendeskModule} from './zendesk/zendesk.module';
import {ZendeskEntity} from './zendesk/entities/zendesk.entity';
import {DevopsModule} from './devops/devops.module';
import {DevopsController} from './devops/devops.controller';
import {DevopsService} from './devops/devops.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
    imports: [TerminusModule, ConfigModule.forRoot(), ScheduleModule.forRoot(), TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: 5432,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [DeadlinesEntity, MemberEntity, ServerStatusEntity, NoteEntity, ZendeskEntity],
        synchronize: true
    }), MembersModule, DeadlinesModule, ServerStatusModule, NotesModule, MembersModule, ZendeskModule, DevopsModule],
    controllers: [AppController, ServerStatusController, HealthController, DeadlinesController, NotesController, MembersController, ZendeskController, DevopsController],
    providers: [AppService, ServerStatusService, DeadlinesService, NotesService, MembersService, ZendeskService, DevopsService]
})
export class AppModule {
}
