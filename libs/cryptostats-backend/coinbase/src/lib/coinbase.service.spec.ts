import { Test } from '@nestjs/testing';
import { CoinbaseService } from './coinbase.service';

describe('CoinbaseService', () => {
  let service: CoinbaseService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CoinbaseService],
    }).compile();

    service = module.get(CoinbaseService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
