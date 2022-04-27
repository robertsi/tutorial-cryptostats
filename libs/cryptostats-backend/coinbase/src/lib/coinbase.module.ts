import { UsersModule } from '@cryptostats/cryptostats-backend-users';
import { AuthModule } from '@cryptostats/cryptostats-backend-auth';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CoinbaseAuthService } from './coinbase-auth.service';
import { CoinbaseController } from './coinbase.controller';
import { CoinbaseService } from './coinbase.service';

@Module({
  imports: [HttpModule, AuthModule, UsersModule],
  controllers: [CoinbaseController],
  providers: [CoinbaseAuthService, CoinbaseService],
})
export class CoinbaseModule {}
