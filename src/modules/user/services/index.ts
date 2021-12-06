import { Injectable } from '@nestjs/common';
import { PasswordService } from '@src/modules/common/services/password-service';
import { UserCustomRepository } from '../repositories';
import { UserServiceDTO } from './dtos/user-service';
import { WriteService } from './implementations/write-service';

@Injectable()
export class UserService extends WriteService implements UserServiceDTO {
  constructor(repository: UserCustomRepository, password: PasswordService) {
    super(repository, password);
  }
}
