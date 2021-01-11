import {Controller, Get} from '@nestjs/common';
import {DevopsService, projectsResult, agentRequests} from './devops.service';

@Controller('devops')
export class DevopsController {
    constructor(private devopsService: DevopsService) {
        this.devopsService.getDevopsProjects();
    }

    @Get('/requests')
    getDevopsAgentRequests() {
        // return this.devopsService.getDevopsAgentRequests();
        return agentRequests;
    }

    @Get()
    getDevopsProjects() {
        // return this.devopsService.getDevopsProjects();
        return projectsResult.sort((a, b) => a.name.localeCompare(b.name));
    }
    @Get('/projectssortlastupdated')
    getDevopsProjectsSortLastUpdated() {
        // return this.devopsService.getDevopsProjects();
        return projectsResult.sort((a, b) => +new Date(b.lastUpdateTime) - +new Date(a.lastUpdateTime));
    }
}
