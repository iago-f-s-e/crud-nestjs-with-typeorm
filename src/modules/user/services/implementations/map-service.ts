import { mapUser } from '@src/modules/common/mapping/map-user';
import { IUser } from '@src/modules/database/interfaces/user';
import { MappedUser } from '../../interfaces/mapped-user';
import { MapServiceDTO } from '../dtos/map-service';
import { ReadService } from './read-service';

export class MapService extends ReadService implements MapServiceDTO {
  public mapUser(user: IUser): MappedUser {
    return mapUser(user);
  }
}
