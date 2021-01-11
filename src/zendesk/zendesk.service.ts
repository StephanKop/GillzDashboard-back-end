import {Injectable} from '@nestjs/common';
import fetch from 'node-fetch';
import {Cron, CronExpression} from '@nestjs/schedule';

export let merged: [] = [];

@Injectable()
export class ZendeskService {
    async getZendesk() {
        // const url = 'https://gillzdashboard.zendesk.com/api/v2/tickets.json?sort_by=id&sort_order=desc';
        // const url = 'https://gillz.zendesk.com/api/v2/tickets.json?sort_by=id&sort_order=desc';
        const url = 'https://gillz.zendesk.com/api/v2/search.json?query=type:ticket status:open';
        const res = await fetch(url, {
            method: 'get',
            headers: ({
                Authorization: process.env.ZENDESK_AUTH
            })
        });
        return res.json();
    }

    async getZendeskUser() {
        // const url = 'https://gillzdashboard.zendesk.com/api/v2/users.json';
        const url = 'https://gillz.zendesk.com/api/v2/users.json';
        const res = await fetch(url, {
            method: 'get',
            headers: ({
                Authorization: process.env.ZENDESK_AUTH
            })
        });
        return res.json();
    }
    @Cron(CronExpression.EVERY_30_SECONDS)
    async mergeZendesk() {
        const tickets = await this.getZendesk();
        const users = await this.getZendeskUser();
        merged = tickets.results.map(ticket => ({
            ...users.users.find((user) => (user.id === ticket.assignee_id)),
            ...ticket
        }));
        // merged = tickets;
    }
}

