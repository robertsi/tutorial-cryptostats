import { createParamDecorator, ExecutionContext } from '@nestjs/common';
// import { UserResponse } from 'libs/cryptostats-backend/users/src/lib/dto/response/user-response.dto';
import { UserResponse } from '@cryptostats/api';

const getCurrentUserByContext = (context: ExecutionContext): UserResponse => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
