import { SaveValidatedUser } from '@src/modules/auth/validators/save-user';
import { IUser } from '@src/modules/database/interfaces/user';

export interface WriteServiceDTO {
  create: (data: SaveValidatedUser) => Promise<IUser>;
}
