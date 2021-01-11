import {Test, TestingModule} from '@nestjs/testing';
import {DevopsController} from './devops.controller';
import {DevopsService} from './devops.service';

describe('DevopsController', () => {
    let controller: DevopsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DevopsController],
            providers: [DevopsService],
        }).compile();

        controller = module.get<DevopsController>(DevopsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
