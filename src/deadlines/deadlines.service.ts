import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, Between} from 'typeorm';
import {DeadlinesEntity} from './deadlines.entity';
import {CreateDeadlinesDto} from './DTO/create.deadlines.dto';

@Injectable()
export class DeadlinesService {

    constructor(
        @InjectRepository(DeadlinesEntity)
        private deadlinesRepository: Repository<DeadlinesEntity>
    ) {
    }

    getDeadlines(): Promise<DeadlinesEntity[]> {
        const today = new Date();
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 100);
        return this.deadlinesRepository.find({where: {deadline: Between(today, futureDate)}, relations: ['members']});
    }

    getDeadline(id): Promise<DeadlinesEntity[]> {
        return this.deadlinesRepository.find({where: {id}, relations: ['members']});
    }

    getFourDeadlines(isActive): Promise<DeadlinesEntity[]> {
        return this.deadlinesRepository.find({where: {isActive}, relations: ['members']});
    }

    getNameOrderedDeadlines(): Promise<DeadlinesEntity[]> {
        const today = new Date();
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 100);
        return this.deadlinesRepository.find({
            where: {deadline: Between(today, futureDate)},
            order: {project: 'ASC'},
            relations: ['members']
        });
    }

    getDateOrderedDeadlines(): Promise<DeadlinesEntity[]> {
        const today = new Date();
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 100);
        return this.deadlinesRepository.find({
            where: {deadline: Between(today, futureDate)},
            order: {deadline: 'ASC'},
            relations: ['members']
        });
    }

    createDeadline(deadline: CreateDeadlinesDto): Promise<DeadlinesEntity> {
        return this.deadlinesRepository.save(deadline);
    }

    updateDeadline(id: string, deadline: CreateDeadlinesDto): Promise<DeadlinesEntity> {
        return this.deadlinesRepository.save({...deadline, id: Number(id)});
    }

    deleteDeadline(id: string, deadline: CreateDeadlinesDto): Promise<DeadlinesEntity> {
        return this.deadlinesRepository.remove({...deadline, id: Number(id)});
    }
}
