import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { TokenService } from '@src/modules/common/services/token-service';
import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services';

@Injectable()
export class AuthUser implements NestMiddleware {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService
  ) {}

  public async use(request: Request, _: Response, next: NextFunction) {
    const payloadOrError = this.tokenService.verify(request.headers.authorization);

    if (payloadOrError.isLeft()) {
      throw new UnauthorizedException(payloadOrError.value.message);
    }

    const payloadUser = payloadOrError.value;

    const userOrError = await this.userService.findById(payloadUser.userId);

    if (userOrError.isLeft()) {
      throw new UnauthorizedException('Unauthorized');
    }

    const user = userOrError.value;

    if (!user.isActive) {
      throw new UnauthorizedException('Unauthorized');
    }

    request.user = user;

    next();
  }
}
