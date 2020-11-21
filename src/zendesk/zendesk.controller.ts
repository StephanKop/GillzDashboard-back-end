import { Controller, Get } from '@nestjs/common';
import { ZendeskService } from './zendesk.service';
import fetch from 'node-fetch';

@Controller('zendesk')
export class ZendeskController {
  constructor(private zendeskService: ZendeskService) {
    this.zendeskService.getZendesk();
  }

  @Get('/user')
  getZendeskUser() {
    return this.zendeskService.getZendeskUser();
  }

  @Get()
  getZendesk() {
    return this.zendeskService.getZendesk();
  }
}
