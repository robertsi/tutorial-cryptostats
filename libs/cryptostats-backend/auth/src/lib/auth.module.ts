import { JwtAuthGuard } from '@cryptostats/cryptostats-backend-auth';


import { Module, forwardRef} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '@cryptostats/cryptostats-backend-users';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EncryptionService } from './encryption.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    //UsersModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, EncryptionService, JwtStrategy],
  exports: [EncryptionService],
})
export class AuthModule {}
