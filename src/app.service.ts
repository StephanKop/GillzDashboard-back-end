import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        fetchData();
        return 'Hello World!';
    }
}
