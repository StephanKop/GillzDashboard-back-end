import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ServerStatusEntity} from '../server-status/server-status.entity';
import {UpdateServerStatusDto} from './DTO/update-server-status.dto';

@Injectable()
export class ServerStatusService {

    constructor(
        @InjectRepository(ServerStatusEntity)
        private ServerStatusRepository: Repository<ServerStatusEntity>
    ) {
    }

    getServerStatus(): Promise<ServerStatusEntity[]> {
        return this.ServerStatusRepository.find({order: {id: 'ASC'}});
    }

    updateServerStatus(id: string, server: UpdateServerStatusDto): Promise<ServerStatusEntity> {
        return this.ServerStatusRepository.save({...server, id: Number(id)});
    }

}
