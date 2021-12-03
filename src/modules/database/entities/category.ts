import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
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
}
