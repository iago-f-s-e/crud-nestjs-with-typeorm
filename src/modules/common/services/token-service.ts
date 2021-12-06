import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenServiceDTO } from './dtos/token-service';

@Injectable()
export class TokenService implements TokenServiceDTO {
  constructor(private readonly jwtService: JwtService) {}

  public generateToken(userId: string): string {
    const payload = { userId };

    return this.jwtService.sign(payload);
  }
}
