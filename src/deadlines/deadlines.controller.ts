import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { DeadlinesService } from './deadlines.service';

interface DeadlinesDto {
    id: number;
    name: string;
    members: [
        {
            name: string;
            image: string;
        }
    ];
    deadline: string;
    days: string;
    link: string;
}

@Controller('deadlines')
export class DeadlinesController {
    constructor(private deadlinesService: DeadlinesService) {}

    @Get()
    getDeadlines() {
        return this.deadlinesService.getDeadlines();
    }

    @Get(':id')
    getDeadline(@Param() params) {
        console.log('get a single product', params.id);
        return this.deadlinesService.getDeadlines().filter(p => p.id == params.id);
    }

    @Post()
    createDeadline(@Body() product: DeadlinesDto) {
        console.log('create product', product);
        this.deadlinesService.createDeadline(product);
    }

    @Put()
    updateDeadline(@Body() product: DeadlinesDto) {
        console.log('update product', product);
        this.deadlinesService.updateDeadline(product);
    }

    @Delete()
    deleteDeadline(@Body() product: DeadlinesDto) {
        console.log('delete product', product.id);
        this.deadlinesService.deleteDeadline(product.id);
    }
}
