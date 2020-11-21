import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class ZendeskService {
  async getZendesk() {
      // const error = String;
      // let data = []
      const url = 'https://gillztest.zendesk.com/api/v2/tickets.json'
      const res = await fetch(url, {
        method: 'get',
        headers: ({
          'Authorization': process.env.ZENDESK_AUTH,
        }),
      });
      // res
      //     .json()
      //     .then((res) => {
      //         data = res;
      //       return data;
      //     })
      //     .catch(err => error(err));
      return res.json();
  }
    async getZendeskUser() {
        const url = 'https://gillztest.zendesk.com/api/v2/users.json'
        const res = await fetch(url, {
            method: 'get',
            headers: ({
                'Authorization': process.env.ZENDESK_AUTH,
            }),
        });
        return res.json();
    }
}
