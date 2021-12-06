import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { MappedUser } from '@src/modules/user/interfaces/mapped-user';
import { SaveValidatedUser } from '@src/modules/user/interfaces/save-user';
import { Either } from '@src/shared/either';
import { UpdateValidatedUser } from '../../interfaces/update-user';

export type UpdateResponse = Either<NotFoundException | UnauthorizedException, MappedUser>;

export interface WriteServiceDTO {
  create: (data: SaveValidatedUser) => Promise<MappedUser>;
  inactive: (userId: string) => Promise<void>;
  update: (userId: string, data: UpdateValidatedUser) => Promise<UpdateResponse>;
}
