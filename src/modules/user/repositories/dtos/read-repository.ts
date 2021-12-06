import { IUser } from '@src/modules/database/interfaces/user';

export interface ReadRepositoryDTO {
  findById: (userId: string) => Promise<IUser | undefined>;
  findAll: () => Promise<IUser[]>;
  findByEmail: (email: string) => Promise<IUser | undefined>;
}
