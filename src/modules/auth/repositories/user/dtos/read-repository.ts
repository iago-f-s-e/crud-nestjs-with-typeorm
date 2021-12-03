import { IUser } from '@src/modules/database/interfaces/user';

export interface ReadRepositoryDTO {
  findByEmail: (email: string) => Promise<IUser | undefined>;
}
