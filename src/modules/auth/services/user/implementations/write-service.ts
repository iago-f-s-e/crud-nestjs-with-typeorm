import { ConflictException } from '@nestjs/common';
import { IAuthenticatedUser } from '@src/modules/auth/interfaces/authenticated-user';
import { SaveValidatedUser } from '@src/modules/auth/interfaces/save-user';
import { UserCustomRepository } from '@src/modules/auth/repositories/user';
import { mapUser } from '@src/modules/common/mapping/map-user';
import { AuthService } from '../../auth';
import { WriteServiceDTO } from '../dtos/write-service';

export class WriteService implements WriteServiceDTO {
  constructor(
    protected readonly repository: UserCustomRepository,
    private readonly authService: AuthService
  ) {}

  public async create(data: SaveValidatedUser): Promise<IAuthenticatedUser> {
    const emailExists = await this.repository.findByEmail(data.email);

    if (emailExists) throw new ConflictException('Email already exists');

    const user = mapUser(await this.repository.insert(data));

    const token = this.authService.generateToken(user.id);

    return { token, user };
  }
}
