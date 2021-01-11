import {Controller, Get, Param, Post, Body, Put, Delete} from '@nestjs/common';
import {DeadlinesService} from './deadlines.service';
import {CreateDeadlinesDto} from './DTO/create.deadlines.dto';
import {DeadlinesDto} from './DTO/deadlines.dto';
import {Repository} from 'typeorm';
import {DeadlinesEntity} from './deadlines.entity';

@Controller('deadlines')
export class DeadlinesController {
    private deadlinesRepository: Repository<DeadlinesEntity>;

    constructor(private deadlinesService: DeadlinesService) {
    }

    @Get()
    getDeadlines(@Param() params) {
        return this.deadlinesService.getDeadlines();
    }

    @Get('four')
    getFourDeadlines() {
        return this.deadlinesService.getFourDeadlines(true);
    }

    @Get('orderedbyname')
    getNameOrderedDeadlines() {
        return this.deadlinesService.getNameOrderedDeadlines();
    }

    @Get('orderedbydate')
    getDateOrderedDeadlines() {
        return this.deadlinesService.getDateOrderedDeadlines();
    }

    @Get(':id')
    getDeadline(@Param() params) {
        return this.deadlinesService.getDeadline(params.id);
    }

    @Post()
    async createDeadline(@Body() deadline: CreateDeadlinesDto): Promise<DeadlinesDto> {
        return await this.deadlinesService.createDeadline(deadline);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() deadline: CreateDeadlinesDto): Promise<DeadlinesDto> {
        console.log(deadline);
        return this.deadlinesService.updateDeadline(id, deadline);
    }

    @Delete(':id')
    deleteDeadline(@Param('id') id: string, @Body() deadline: CreateDeadlinesDto): Promise<DeadlinesDto> {
        return this.deadlinesService.deleteDeadline(id, deadline);
    }
}
