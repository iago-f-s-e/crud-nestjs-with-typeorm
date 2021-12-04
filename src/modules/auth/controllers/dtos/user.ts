import { IUser } from '@src/modules/database/interfaces/user';
import { SaveValidatedUser } from '../../interfaces/save-user';

export interface UserControllerDTO {
  create: (data: SaveValidatedUser) => Promise<IUser>;
}
