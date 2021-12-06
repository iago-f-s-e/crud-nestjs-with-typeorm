import { MappedUser } from '@src/modules/user/interfaces/mapped-user';

export interface IAuthenticatedUser {
  user: MappedUser;
  token: string;
}
