import { IUser } from '@src/modules/database/interfaces/user';
import { MappedUser } from '../../interfaces/mapped-user';

export interface MapServiceDTO {
  mapUser: (user: IUser) => MappedUser;
}
