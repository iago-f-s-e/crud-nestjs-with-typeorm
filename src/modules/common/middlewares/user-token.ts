import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { TokenService } from '../services/token-service';

@Injectable()
export class UserToken implements NestMiddleware {
  constructor(private readonly tokenService: TokenService) {}

  public async use(request: Request, _: Response, next: NextFunction) {
    const payloadOrError = this.tokenService.verify(request.headers.authorization);

    if (payloadOrError.isLeft()) {
      throw new UnauthorizedException(payloadOrError.value);
    }

    request.authorizedUser = payloadOrError.value;

    next();
  }
}
