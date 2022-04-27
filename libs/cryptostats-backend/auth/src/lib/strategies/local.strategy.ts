import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from '@cryptostats/cryptostats-backend-users';
import { UserResponse} from '@cryptostats/api';



@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(forwardRef(() => UsersService))private readonly usersService: UsersService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<UserResponse> {
    return this.usersService.validateUser(email, password);
  }
}
