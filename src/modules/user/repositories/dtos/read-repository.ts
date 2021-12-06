import { IUser } from '@src/modules/database/interfaces/user';

export interface ReadRepositoryDTO {
  findAll: () => Promise<IUser[]>;
  findByEmail: (email: string) => Promise<IUser | undefined>;
}
