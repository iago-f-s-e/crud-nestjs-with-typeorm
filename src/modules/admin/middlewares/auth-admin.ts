import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { TokenService } from '@src/modules/common/services/token-service';
import { NextFunction, Request, Response } from 'express';
import { AdminService } from '../services';

@Injectable()
export class AuthAdmin implements NestMiddleware {
  constructor(
    private readonly adminService: AdminService,
    private readonly tokenService: TokenService
  ) {}

  public async use(request: Request, _: Response, next: NextFunction) {
    const payloadOrError = this.tokenService.verify(request.headers.authorization);

    if (payloadOrError.isLeft()) {
      throw new UnauthorizedException(payloadOrError.value.message);
    }

    const payloadUser = payloadOrError.value;

    const adminOrError = await this.adminService.findByUserId(payloadUser.userId);

    if (adminOrError.isLeft()) {
      throw new UnauthorizedException('Unauthorized');
    }

    const admin = adminOrError.value;

    request.admin = admin;

    next();
  }
}
