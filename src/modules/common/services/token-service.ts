import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@src/modules/database/entities/user';
import { left, right } from '@src/shared/either';
import { InvalidTokenError } from '../errors/invalid-token';
import { IAuthorizedUser, TokenServiceDTO, VerifyTokenResponse } from './dtos/token-service';

interface VerifiedToken extends IAuthorizedUser {
  iat: number;
  exp: number;
}

@Injectable()
export class TokenService implements TokenServiceDTO {
  constructor(private readonly jwtService: JwtService) {}

  public verify(accessToken?: string): VerifyTokenResponse {
    if (!accessToken) return left(new InvalidTokenError(accessToken));

    const [_, token] = accessToken.split(' ');

    try {
      const { exp: _, iat: __, ...payload } = this.jwtService.verify(token) as VerifiedToken;

      return right(payload);
    } catch (_) {
      return left(new InvalidTokenError(token));
    }
  }

  public generateToken({ isActive, userId }: User): string {
    const payload = { userId, isActive };

    return this.jwtService.sign(payload);
  }
}
