import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { left, right } from '@src/shared/either';
import { InvalidTokenError } from '../errors/invalid-token';
import { PayloadToken, TokenServiceDTO, VerifyTokenResponse } from './dtos/token-service';

@Injectable()
export class TokenService implements TokenServiceDTO {
  constructor(private readonly jwtService: JwtService) {}

  public verify(accessToken?: string): VerifyTokenResponse {
    if (!accessToken) return left(new InvalidTokenError(accessToken));

    const [_, token] = accessToken.split(' ');

    try {
      const payload = this.jwtService.verify(token) as PayloadToken;

      return right(payload);
    } catch (_) {
      return left(new InvalidTokenError(token));
    }
  }

  public generateToken(userId: string): string {
    const payload = { userId };

    return this.jwtService.sign(payload);
  }
}
