import { User } from '@src/modules/database/entities/user';
import { MappedUser } from '../../interfaces/mapped-user';
import { SaveValidatedUser } from '../../interfaces/save-user';
import { UpdateUser } from '../../interfaces/update-user';
import { UpdateResponse } from '../../services/dtos/write-service';

export interface UserControllerDTO {
  listAll: () => Promise<User[]>;
  update: (userId: string, body: UpdateUser, user: User) => Promise<UpdateResponse>;
  create: (data: SaveValidatedUser) => Promise<MappedUser>;
}
