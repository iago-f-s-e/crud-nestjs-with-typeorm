import { ConflictException } from '@nestjs/common';
import { PasswordService } from '@src/modules/common/services/password-service';
import { MappedUser } from '@src/modules/user/interfaces/mapped-user';
import { SaveValidatedUser } from '@src/modules/user/interfaces/save-user';
import { UserCustomRepository } from '@src/modules/user/repositories';
import { WriteServiceDTO } from '../dtos/write-service';
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
}
