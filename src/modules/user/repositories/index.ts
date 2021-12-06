import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@src/modules/database/entities/user';
import { Repository } from 'typeorm';
import { UserCustomRepositoryDTO } from './dtos/user-repository';
import { WriteRepository } from './implementations/write-repository';

@Injectable()
export class UserCustomRepository extends WriteRepository implements UserCustomRepositoryDTO {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository);
  }
}
