import { User } from '@src/modules/database/entities/user';
import { MappedUser } from '../../interfaces/mapped-user';

export interface MapServiceDTO {
  mapUser: (user: User) => MappedUser;
}
