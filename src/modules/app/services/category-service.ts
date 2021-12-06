import { ConflictException, Injectable } from '@nestjs/common';
import { Category } from '@src/modules/database/entities/category';
import { Either, left, right } from '@src/shared/either';
import { SaveValidatedCategory } from '../interfaces/category/save-category';
import { CategoryCustomRepository } from '../repositories/category-repository';

@Injectable()
export class CategoryService {
  constructor(private readonly repository: CategoryCustomRepository) {}

  public async create(data: SaveValidatedCategory): Promise<Either<ConflictException, Category>> {
    const titleExists = await this.repository.findByTitle(data.title);

    if (titleExists) return left(new ConflictException(`The title "${data.title}" already exists`));

    return right(await this.repository.insert(data));
  }
}
