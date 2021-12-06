import { IUser } from '@src/modules/database/interfaces/user';
import { SaveValidatedUser } from '@src/modules/user/interfaces/save-user';
import { UpdateResult } from 'typeorm';
import { UpdateValidatedUser } from '../../interfaces/update-user';

export interface WriteRepositoryDTO {
  inactive: (userId: string) => Promise<UpdateResult>;
  insert: (data: SaveValidatedUser) => Promise<IUser>;
  update: (userId: string, data: UpdateValidatedUser) => Promise<UpdateResult>;
}
