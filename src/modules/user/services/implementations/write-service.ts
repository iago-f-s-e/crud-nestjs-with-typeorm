import { ConflictException } from '@nestjs/common';
import { PasswordService } from '@src/modules/common/services/password-service';
import { MappedUser } from '@src/modules/user/interfaces/mapped-user';
import { SaveValidatedUser } from '@src/modules/user/interfaces/save-user';
import { UserCustomRepository } from '@src/modules/user/repositories';
import { left, right } from '@src/shared/either';
import { UpdateValidatedUser } from '../../interfaces/update-user';
import { UpdateResponse, WriteServiceDTO } from '../dtos/write-service';
import { MapService } from './map-service';

export class WriteService extends MapService implements WriteServiceDTO {
  constructor(repository: UserCustomRepository, private readonly passService: PasswordService) {
    super(repository);
  }

  public async create(data: SaveValidatedUser): Promise<MappedUser> {
    const emailExists = await this.repository.findByEmail(data.email);

    if (emailExists) throw new ConflictException('Email already exists');

    const user = {
      ...data,
      password: await this.passService.hashing(data.password)
    };

    return this.mapUser(await this.repository.insert(user));
  }

  public async inactive(userId: string): Promise<void> {
    return this.repository.inactive(userId).then(() => console.log('Inactivated'));
  }

  public async update(userId: string, data: UpdateValidatedUser): Promise<UpdateResponse> {
    const userOrError = await this.findById(userId);

    if (userOrError.isLeft()) {
      return left(userOrError.value);
    }

    const user = userOrError.value;

    this.repository
      .update(userId, data)
      .then(() => console.log('Update successfully'))
      .catch(err => console.error(err));

    return right(this.mapUser({ ...user, ...data }));
  }
}
