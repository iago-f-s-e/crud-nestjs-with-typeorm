import { ReadRepositoryDTO } from './read-repository';
import { WriteRepositoryDTO } from './write-repository';

export interface UserCustomRepositoryDTO extends WriteRepositoryDTO, ReadRepositoryDTO {}
