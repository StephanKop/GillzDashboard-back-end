import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ServerStatusService } from './server-status.service';

@Controller('server-status')
export class ServerStatusController {
    constructor(private serverStatusService: ServerStatusService) {}

    @Get()
    getServerStatus(@Param() params) {
        return this.serverStatusService.getServerStatus();
    }

    //
    // @Get()
    // getServerStatus() {
    //     return this.serverStatusService.getServerStatus();
    // }
    //
    // @Get(':id')
    // getSingleStatus(@Param() params) {
    //     console.log('get a single server status', params.id);
    //     return this.serverStatusService.getServerStatus().filter(p => p.id == params.id);
    // }
    //
    // @Post()
    // createServer(@Body() server: serverStatusDto) {
    //     console.log('create server', server);
    //     this.serverStatusService.createServer(server);
    // }
    //
    // @Put()
    // updateServer(@Body() server: serverStatusDto) {
    //     console.log('update server', server);
    //     this.serverStatusService.updateServer(server);
    // }
    //
    // @Put()
    // deleteServer(@Body() server: serverStatusDto) {
    //     console.log('delete server', server);
    //     this.serverStatusService.deleteServer(server);
    // }
}
