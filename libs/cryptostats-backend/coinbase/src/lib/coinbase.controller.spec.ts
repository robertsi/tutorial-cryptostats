import { Test } from '@nestjs/testing';
import { CoinbaseController } from './coinbase.controller';
import { CoinbaseService } from './coinbase.service';

describe('CoinbaseController', () => {
  let controller: CoinbaseController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CoinbaseService],
      controllers: [CoinbaseController],
    }).compile();

    controller = module.get(CoinbaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
