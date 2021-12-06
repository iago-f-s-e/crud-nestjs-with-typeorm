import { User } from '@src/modules/database/entities/user';
import { SaveValidatedUser } from '@src/modules/user/interfaces/save-user';
import { Repository, UpdateResult } from 'typeorm';
import { UpdateValidatedUser } from '../../interfaces/update-user';
import { WriteRepositoryDTO } from '../dtos/write-repository';
import { ReadRepository } from './read-repository';

export class WriteRepository extends ReadRepository implements WriteRepositoryDTO {
  constructor(repository: Repository<User>) {
    super(repository);
  }

  private create(data: SaveValidatedUser): User {
    return this.repository.create(data);
  }

  public insert(data: SaveValidatedUser): Promise<User> {
    return this.repository.save(this.create(data));
  }

  public update(userId: string, data: UpdateValidatedUser): Promise<UpdateResult> {
    return this.repository.update({ userId }, data);
  }
}
