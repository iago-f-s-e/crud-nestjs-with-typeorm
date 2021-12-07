import { User } from '@src/modules/database/entities/user';
import { UserDocument } from '@src/modules/database/schemas/user';
import { SaveValidatedUser } from '@src/modules/user/interfaces/save-user';
import { Model } from 'mongoose';
import { Repository, UpdateResult } from 'typeorm';
import { UpdateValidatedUser } from '../../interfaces/update-user';
import { WriteRepositoryDTO } from '../dtos/write-repository';
import { ReadRepository } from './read-repository';

export class WriteRepository extends ReadRepository implements WriteRepositoryDTO {
  constructor(repository: Repository<User>, private readonly userModel: Model<UserDocument>) {
    super(repository);
  }

  private create(data: SaveValidatedUser): User {
    return this.repository.create(data);
  }

  public insert(data: SaveValidatedUser): Promise<User> {
    const model = new this.userModel(data);

    // TODO: remover exemplo

    model.save().then(res => console.log(res));

    return this.repository.save(this.create(data));
  }

  public inactive(userId: string): Promise<UpdateResult> {
    return this.repository.update(
      { userId },
      {
        isActive: false
      }
    );
  }

  public update(userId: string, data: UpdateValidatedUser): Promise<UpdateResult> {
    return this.repository.update({ userId }, data);
  }
}
