import { NotFoundException } from '@nestjs/common';
import { User } from '@src/modules/database/entities/user';
import { Either } from '@src/shared/either';

export type ReadServiceResponse = Either<NotFoundException, User>;

export interface ReadServiceDTO {
  findByEmail: (email: string) => Promise<ReadServiceResponse>;
}
