import { IUser } from '@src/modules/database/interfaces/user';

export interface MappedUser extends Pick<IUser, 'email' | 'name' | 'questions'> {
  id: string;
}
