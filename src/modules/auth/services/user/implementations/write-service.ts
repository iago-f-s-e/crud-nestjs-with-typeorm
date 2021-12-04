import { ConflictException } from '@nestjs/common';
import { SaveValidatedUser } from '@src/modules/auth/interfaces/save-user';
import { UserCustomRepository } from '@src/modules/auth/repositories/user';
import { User } from '@src/modules/database/entities/user';
import { WriteServiceDTO } from '../dtos/write-service';

export class WriteService implements WriteServiceDTO {
  constructor(protected readonly repository: UserCustomRepository) {}

  public async create(data: SaveValidatedUser): Promise<User> {
    const emailExists = await this.repository.findByEmail(data.email);

    if (emailExists) throw new ConflictException('Email already exists');

    return this.repository.insert(data);
  }
}
