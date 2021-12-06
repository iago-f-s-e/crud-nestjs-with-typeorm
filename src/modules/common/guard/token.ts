import { createParamDecorator } from '@nestjs/common';
import { Request, Response } from 'express';

interface UserDecorator {
  args: [Request, Response];
}

export const AuthorizedUser = createParamDecorator((_, { args }: UserDecorator) => {
  const [request] = args;

  return request.user;
});
