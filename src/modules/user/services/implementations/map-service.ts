import { mapUser } from '@src/modules/common/mapping/map-user';
import { User } from '@src/modules/database/entities/user';
import { MappedUser } from '../../interfaces/mapped-user';
import { MapServiceDTO } from '../dtos/map-service';
import { ReadService } from './read-service';

export class MapService extends ReadService implements MapServiceDTO {
  public mapUser(user: User): MappedUser {
    return mapUser(user);
  }
}
