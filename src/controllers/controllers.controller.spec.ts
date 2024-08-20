import { Test, TestingModule } from '@nestjs/testing';
import { ControllersController } from './controllers.controller';
import { ControllersService } from './controllers.service';

describe('ControllersController', () => {
  let controller: ControllersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllersController],
      providers: [ControllersService],
    }).compile();

    controller = module.get<ControllersController>(ControllersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
