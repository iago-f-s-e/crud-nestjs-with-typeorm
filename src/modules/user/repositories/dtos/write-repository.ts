import { IUser } from '@src/modules/database/interfaces/user';
import { SaveValidatedUser } from '@src/modules/user/interfaces/save-user';

export interface WriteRepositoryDTO {
  insert: (data: SaveValidatedUser) => Promise<IUser>;
}
