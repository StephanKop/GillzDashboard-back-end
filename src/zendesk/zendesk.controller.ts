import {Controller, Get} from '@nestjs/common';
import {ZendeskService} from './zendesk.service';
import {merged} from './zendesk.service';

@Controller('zendesk')
export class ZendeskController {
    constructor(private zendeskService: ZendeskService) {
        // this.zendeskService.getZendesk();
        // this.zendeskService.getZendeskTimer();
        // return () => clearInterval(interval);
    }

    @Get('/user')
    getZendeskUser() {
        const users = this.zendeskService.getZendeskUser();
    }

    @Get()
    // async getZendesk() {
        // const tickets = await this.zendeskService.getZendesk();
        // const users = await this.zendeskService.getZendeskUser();
        // return tickets.tickets.map(ticket => ({
        //     ...users.users.find((user) => (user.id === ticket.assignee_id)),
        //     ...ticket
        // }));
        // return this.zendeskService.getZendeskTimer();
    // }
    async zendesk() {
        return merged;
    }
}
