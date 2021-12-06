import { User } from '@src/modules/database/entities/user';
import { IUser } from '@src/modules/database/interfaces/user';
import { MappedUser } from '../../interfaces/mapped-user';
import { SaveValidatedUser } from '../../interfaces/save-user';
import { UpdateUser } from '../../interfaces/update-user';
import { UpdateResponse } from '../../services/dtos/write-service';

export interface UserControllerDTO {
  create: (data: SaveValidatedUser) => Promise<MappedUser>;
  inactive: (userId: string, user: IUser) => Promise<void>;
  listAll: () => Promise<User[]>;
  update: (userId: string, body: UpdateUser, user: IUser) => Promise<UpdateResponse>;
}
