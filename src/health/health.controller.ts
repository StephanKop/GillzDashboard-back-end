import {Controller, Get} from '@nestjs/common';
import {HealthCheck, HealthCheckService, DNSHealthIndicator, DiskHealthIndicator, MemoryHealthIndicator} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        private dns: DNSHealthIndicator,
        private memory: MemoryHealthIndicator,
        private disk: DiskHealthIndicator
    ) {
    }

    @Get()
    @HealthCheck()
    check() {
        return this.health.check([
            () => this.dns.pingCheck('Server01', 'https://swvzout.dev01.gillz.nl/')
        ]);
    }
}
