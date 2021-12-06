import { Injectable } from '@nestjs/common';
import { UserCustomRepository } from '../../repositories/user';
import { AuthService } from '../auth';
import { UserServiceDTO } from './dtos/user-service';
import { WriteService } from './implementations/write-service';

@Injectable()
export class UserService extends WriteService implements UserServiceDTO {
  constructor(repository: UserCustomRepository, auth: AuthService) {
    super(repository, auth);
  }
}
