import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PasswordService } from '@src/modules/common/services/password-service';
import { TokenService } from '@src/modules/common/services/token-service';
import { UserService } from '@src/modules/user/services';
import { left, right } from '@src/shared/either';
import { ILogin } from '../interfaces/login';
import { AuthServiceDTO, LoginResponse } from './dtos/auth-service';

@Injectable()
export class AuthService implements AuthServiceDTO {
  constructor(
    private readonly userService: UserService,
    private readonly passService: PasswordService,
    private readonly tokenService: TokenService
  ) {}

  public async login({ email, password }: ILogin): Promise<LoginResponse> {
    const userOrError = await this.userService.findByEmail(email);

    if (userOrError.isLeft()) return left(new UnauthorizedException('Unauthorized'));

    const userFound = userOrError.value;

    if (!(await this.passService.compare(password, userFound.password)).valueOf())
      return left(new UnauthorizedException('Unauthorized'));

    const user = this.userService.mapUser(userFound);

    const token = this.tokenService.generateToken(user.id);

    return right({ user, token });
  }
}
