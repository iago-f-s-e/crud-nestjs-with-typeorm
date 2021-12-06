import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '@src/modules/database/entities/admin';
import { User } from '@src/modules/database/entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class AdminCustomRepository {
  constructor(@InjectRepository(Admin) private readonly repository: Repository<Admin>) {}

  private create(user: User): Admin {
    return this.repository.create({ user });
  }

  public insert(user: User): Promise<Admin> {
    return this.repository.save(this.create(user));
  }

  public findByUserId(userId: string): Promise<Admin | undefined> {
    return this.repository
      .createQueryBuilder()
      .innerJoin('Admin.user', 'user')
      .where('user.userId = :userId', { userId })
      .andWhere('user.isActive :isActive', { isActive: true })
      .getOne();
  }
}
