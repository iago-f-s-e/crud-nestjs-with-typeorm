import { User } from '@src/modules/database/entities/user';
import { Either } from '@src/shared/either';
import { InvalidTokenError } from '../../errors/invalid-token';

export interface IAuthorizedUser {
  userId: string;
  isActive: boolean;
}

export type VerifyTokenResponse = Either<InvalidTokenError, IAuthorizedUser>;

export interface TokenServiceDTO {
  generateToken: (data: User) => string;
  verify: (token?: string) => VerifyTokenResponse;
}
