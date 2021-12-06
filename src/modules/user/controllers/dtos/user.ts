import { IAuthorizedUser } from '@src/modules/common/services/dtos/token-service';
import { User } from '@src/modules/database/entities/user';
import { MappedUser } from '../../interfaces/mapped-user';
import { SaveValidatedUser } from '../../interfaces/save-user';

export interface UserControllerDTO {
  listAll: (user: IAuthorizedUser) => Promise<User[]>;
  create: (data: SaveValidatedUser) => Promise<MappedUser>;
}
