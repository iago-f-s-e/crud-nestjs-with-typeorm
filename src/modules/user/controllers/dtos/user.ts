import { MappedUser } from '../../interfaces/mapped-user';
import { SaveValidatedUser } from '../../interfaces/save-user';

export interface UserControllerDTO {
  create: (data: SaveValidatedUser) => Promise<MappedUser>;
}
