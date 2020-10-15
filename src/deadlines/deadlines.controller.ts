import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { DeadlinesService } from './deadlines.service';
import {CreateDeadlinesDto} from "./DTO/create.deadlines.dto";
import {DeadlinesDto} from "./DTO/deadlines.dto";

@Controller('deadlines')
export class DeadlinesController {
    constructor(private deadlinesService: DeadlinesService) {}

    @Get()
    getDeadlines(@Param() params) {
        return this.deadlinesService.getDeadlines();
    }

    @Get(':four')
    getFourDeadlines(@Param() params) {
        return this.deadlinesService.getFourDeadlines(true);
    }

    @Post()
    async createDeadline(@Body() deadline: CreateDeadlinesDto):Promise<DeadlinesDto> {
        return await this.deadlinesService.createDeadline(deadline)
    }
}
