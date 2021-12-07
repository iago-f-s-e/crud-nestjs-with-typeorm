import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@src/modules/database/entities/user';
import { UserDocument, UserMongo } from '@src/modules/database/schemas/user';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { UserCustomRepositoryDTO } from './dtos/user-repository';
import { WriteRepository } from './implementations/write-repository';

@Injectable()
export class UserCustomRepository extends WriteRepository implements UserCustomRepositoryDTO {
  constructor(
    @InjectRepository(User) repository: Repository<User>,
    @InjectModel(UserMongo.name) userModel: Model<UserDocument>
  ) {
    super(repository, userModel);
  }
}
