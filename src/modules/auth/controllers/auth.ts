import { Body, Controller, Post } from '@nestjs/common';
import { ILogin } from '../interfaces/login';
import { AuthService } from '../services';
import { AuthControllerDTO } from './dtos/auth';

@Controller('auth')
export class AuthController implements AuthControllerDTO {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(@Body() data: ILogin) {
    return (await this.authService.login(data)).value;
  }
}
