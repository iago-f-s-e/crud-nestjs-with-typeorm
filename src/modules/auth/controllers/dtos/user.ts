import { IUser } from '@src/modules/database/interfaces/user';
import { SaveValidatedUser } from '../../validators/save-user';

export interface UserControllerDTO {
  create: (data: SaveValidatedUser) => Promise<IUser>;
}
