import { IAuthenticatedUser } from '@src/modules/auth/interfaces/authenticated-user';
import { SaveValidatedUser } from '@src/modules/auth/interfaces/save-user';

export interface WriteServiceDTO {
  create: (data: SaveValidatedUser) => Promise<IAuthenticatedUser>;
}
