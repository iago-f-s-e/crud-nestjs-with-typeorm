import { Injectable, NotFoundException } from '@nestjs/common';
import { Admin } from '@src/modules/database/entities/admin';
import { UserService } from '@src/modules/user/services';
import { Either, left, right } from '@src/shared/either';
import { AdminCustomRepository } from '../repositories';

@Injectable()
export class AdminService {
  constructor(
    private readonly repository: AdminCustomRepository,
    private readonly usesService: UserService
  ) {}

  public async create(userId: string) {
    const userOrError = await this.usesService.findById(userId);

    if (userOrError.isLeft()) throw new NotFoundException('User is not found');

    const user = userOrError.value;

    return this.repository.insert(user);
  }

  public async findByUserId(userId: string): Promise<Either<NotFoundException, Admin>> {
    const admin = await this.repository.findByUserId(userId);

    if (!admin) return left(new NotFoundException('Admin is not found'));

    return right(admin);
  }
}
