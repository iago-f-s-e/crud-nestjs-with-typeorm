import { MappedUser } from '@src/modules/user/interfaces/mapped-user';
import { SaveValidatedUser } from '@src/modules/user/interfaces/save-user';

export interface WriteServiceDTO {
  create: (data: SaveValidatedUser) => Promise<MappedUser>;
}
