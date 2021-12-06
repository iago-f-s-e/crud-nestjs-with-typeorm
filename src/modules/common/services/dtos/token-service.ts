import { Either } from '@src/shared/either';
import { InvalidTokenError } from '../../errors/invalid-token';

export interface IAuthorizedUser {
  userId: string;
}

export type VerifyTokenResponse = Either<InvalidTokenError, IAuthorizedUser>;

export interface TokenServiceDTO {
  generateToken: (userId: string) => string;
  verify: (token?: string) => VerifyTokenResponse;
}
