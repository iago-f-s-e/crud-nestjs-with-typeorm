import { IUser } from '@src/modules/database/interfaces/user';

export type UpdateUser = Pick<IUser, 'name'>;

export type UpdateValidatedUser = UpdateUser;
