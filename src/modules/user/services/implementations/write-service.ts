import { ConflictException } from '@nestjs/common';
import { mapUser } from '@src/modules/common/mapping/map-user';
import { MappedUser } from '@src/modules/user/interfaces/mapped-user';
import { SaveValidatedUser } from '@src/modules/user/interfaces/save-user';
import { UserCustomRepository } from '@src/modules/user/repositories';
import { WriteServiceDTO } from '../dtos/write-service';

export class WriteService implements WriteServiceDTO {
  constructor(protected readonly repository: UserCustomRepository) {}

  public async create(data: SaveValidatedUser): Promise<MappedUser> {
    const emailExists = await this.repository.findByEmail(data.email);

    if (emailExists) throw new ConflictException('Email already exists');

    return mapUser(await this.repository.insert(data));
  }
}
