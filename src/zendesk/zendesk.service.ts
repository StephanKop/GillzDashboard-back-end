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
          'Authorization': 'Basic cy5rb3BAZ2lsbHoubmwvdG9rZW46WUdLdGtoVktPNE5IV0JOVUZJSjVmVXBEU2dRMVhnY3JiVlJ6eTlOYw==',
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
                'Authorization': 'Basic cy5rb3BAZ2lsbHoubmwvdG9rZW46WUdLdGtoVktPNE5IV0JOVUZJSjVmVXBEU2dRMVhnY3JiVlJ6eTlOYw==',
            }),
        });
        return res.json();
    }
}
