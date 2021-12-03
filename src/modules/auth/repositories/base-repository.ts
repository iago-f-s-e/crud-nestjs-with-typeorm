import { Repository } from 'typeorm';

export class BaseRepository<Entity> {
  constructor(protected readonly repository: Repository<Entity>) {}
}
