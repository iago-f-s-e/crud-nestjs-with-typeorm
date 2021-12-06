import { IAuthenticatedUser } from '../../interfaces/authenticated-user';
import { SaveValidatedUser } from '../../interfaces/save-user';

export interface UserControllerDTO {
  create: (data: SaveValidatedUser) => Promise<IAuthenticatedUser>;
}
