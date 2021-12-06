import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '@src/modules/database/entities/category';
import { Repository } from 'typeorm';
import { SaveValidatedCategory } from '../interfaces/category/save-category';

@Injectable()
export class CategoryCustomRepository {
  constructor(@InjectRepository(Category) private readonly repository: Repository<Category>) {}

  private create(data: SaveValidatedCategory): Category {
    return this.repository.create(data);
  }

  public findByTitle(title: string): Promise<Category | undefined> {
    return this.repository.findOne({ where: { title } });
  }

  public insert(data: SaveValidatedCategory): Promise<Category> {
    return this.repository.save(this.create(data));
  }

  public findAll(): Promise<Category[]> {
    return this.repository
      .createQueryBuilder()
      .leftJoinAndSelect('Category.questions', 'questions')
      .leftJoinAndSelect('questions.answers', 'answers')
      .getMany();
  }
}
