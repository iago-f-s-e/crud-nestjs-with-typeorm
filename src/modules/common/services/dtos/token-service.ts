import { Either } from '@src/shared/either';
import { InvalidTokenError } from '../../errors/invalid-token';

export interface PayloadToken {
  userId: string;
}

export type VerifyTokenResponse = Either<InvalidTokenError, PayloadToken>;

export interface TokenServiceDTO {
  generateToken: (userId: string) => string;
  verify: (token?: string) => VerifyTokenResponse;
}
