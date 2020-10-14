import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { DeadlinesService } from './deadlines.service';

interface DeadlinesDto {
    id: number;
    name: string;
    members: [
        {
            name: string;
            image: string;
            present: boolean;
        }
    ];
    deadline: string;
    link: string;
}

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

    // @Post()
    // async createDeadline(@Body() deadline: DeadlinesDto):Promise<DeadlinesDto> {
    //     return await this.deadlinesService.createDeadline(deadline);
    // }
    //
    // @Put()
    // updateDeadline(@Body() deadline: DeadlinesDto) {
    //     this.deadlinesService.updateDeadline(deadline);
    // }
    //
    // @Delete()
    // deleteDeadline(@Body() deadline: DeadlinesDto) {
    //     this.deadlinesService.deleteDeadline();
    // }
}
