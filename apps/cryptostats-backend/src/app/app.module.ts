import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '@cryptostats/cryptostats-backend-users'; //import order seems to be importatn, coz of circular dependency
import { AuthModule } from '@cryptostats/cryptostats-backend-auth';
import { CoinbaseModule } from '@cryptostats/cryptostats-backend-coinbase';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService]
    }),
    UsersModule,
    AuthModule,
    CoinbaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
