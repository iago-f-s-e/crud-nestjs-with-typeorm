import { MappedUser } from './mapped-user';

export interface IAuthenticatedUser {
  user: MappedUser;
  token: string;
}
