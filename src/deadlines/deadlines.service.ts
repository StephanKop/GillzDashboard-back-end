import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeadlinesEntity } from './deadlines.entity';
import {CreateDeadlinesDto} from "./DTO/create.deadlines.dto";

@Injectable()
export class DeadlinesService {

    constructor(
        @InjectRepository(DeadlinesEntity)
        private deadlinesRepository: Repository<DeadlinesEntity>,
    ) {}

    getDeadlines(): Promise<DeadlinesEntity[]> {
        return this.deadlinesRepository.find({relations: ['members']});
    }

    getFourDeadlines(isActive): Promise<DeadlinesEntity[]> {
        return this.deadlinesRepository.find({where: {isActive}, relations: ['members']});
    }

    createDeadline(deadline: CreateDeadlinesDto): Promise<DeadlinesEntity> {
       return this.deadlinesRepository.save(deadline);
    }
}
