import { IUser } from '@src/modules/database/interfaces/user';

export type SaveUser = Pick<IUser, 'email' | 'name' | 'password'>;

export type SaveValidatedUser = SaveUser;
