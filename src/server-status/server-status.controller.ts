import {Body, Controller, Get, Param, Put} from '@nestjs/common';
import {ServerStatusService} from './server-status.service';
import {UpdateServerStatusDto} from '../server-status/DTO/update-server-status.dto';

@Controller('server-status')
export class ServerStatusController {
    constructor(private serverStatusService: ServerStatusService) {
    }

    @Get()
    getServerStatus(@Param() params) {
        return this.serverStatusService.getServerStatus();
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() UpdateServerStatusDto: UpdateServerStatusDto) {
        return this.serverStatusService.updateServerStatus(id, UpdateServerStatusDto);
    }
}
