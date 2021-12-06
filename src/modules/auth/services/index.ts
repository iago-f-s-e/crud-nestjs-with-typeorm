import { Injectable } from '@nestjs/common';
import { AuthServiceDTO } from './dtos/auth-service';
import { TokenService } from './implementations/token-service';

@Injectable()
export class AuthService extends TokenService implements AuthServiceDTO {}
