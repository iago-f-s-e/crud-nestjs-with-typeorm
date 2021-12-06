import { UnauthorizedException } from '@nestjs/common';
import { IAuthenticatedUser } from '../../interfaces/authenticated-user';
import { ILogin } from '../../interfaces/login';

export interface AuthControllerDTO {
  login: (data: ILogin) => Promise<UnauthorizedException | IAuthenticatedUser>;
}
