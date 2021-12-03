import { IUser } from './user';

export interface IAdmin {
  adminId: string;
  userId: string;

  user: IUser;
}
