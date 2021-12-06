import { WriteServiceDTO } from './write-service';
import { ReadServiceDTO } from './read-service';
import { MapServiceDTO } from './map-service';

export interface UserServiceDTO extends WriteServiceDTO, MapServiceDTO, ReadServiceDTO {}
