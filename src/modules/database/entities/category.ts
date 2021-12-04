import { uuidGenerate } from '@src/modules/common/infra/utils/uuid-generate';
import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { ICategory } from '../interfaces/category';
import { Question } from './question';

@Entity('category')
export class Category implements ICategory {
  @PrimaryColumn({ type: 'uuid', name: 'category_id' })
  public categoryId!: string;

  @Column({ type: 'varchar' })
  public title!: string;

  @OneToMany(() => Question, questions => questions.category)
  public questions!: Question[];

  @BeforeInsert()
  protected setId(): void {
    this.categoryId = uuidGenerate();
  }
}
