import { UnauthorizedException } from '@nestjs/common';
import { Either } from '@src/shared/either';
import { IAuthenticatedUser } from '../../interfaces/authenticated-user';
import { ILogin } from '../../interfaces/login';

export type LoginResponse = Either<UnauthorizedException, IAuthenticatedUser>;

export interface AuthServiceDTO {
  login: (data: ILogin) => Promise<LoginResponse>;
}
