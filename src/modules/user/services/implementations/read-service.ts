import { NotFoundException } from '@nestjs/common';
import { left, right } from '@src/shared/either';
import { UserCustomRepository } from '../../repositories';
import { ReadServiceDTO, ReadServiceResponse } from '../dtos/read-service';

export class ReadService implements ReadServiceDTO {
  constructor(protected readonly repository: UserCustomRepository) {}

  public findAll() {
    return this.repository.findAll();
  }

  public async findByEmail(email: string): Promise<ReadServiceResponse> {
    const user = await this.repository.findByEmail(email);

    if (!user) return left(new NotFoundException('User is not found'));

    return right(user);
  }
}
