import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { IQuestion } from '../interfaces/question';
import { Answer } from './answer';
import { Category } from './category';
import { User } from './user';

@Entity('question')
export class Question implements IQuestion {
  @PrimaryColumn({ type: 'uuid', name: 'question_id' })
  public questionId!: string;

  @Column({ type: 'uuid', name: 'category_id' })
  public categoryId!: string;

  @Column({ type: 'uuid', name: 'user_id' })
  public userId!: string;

  @Column({ type: 'varchar' })
  public title!: string;

  @Column({ type: 'varchar' })
  public description!: string;

  @Column({ type: 'boolean', name: 'is_open', default: true })
  public isOpen!: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', default: 'now()' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', default: 'now()' })
  public updatedAt!: Date;

  @ManyToOne(() => Category, category => category.questions, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'category_id', referencedColumnName: 'categoryId' })
  public category!: Category;

  @ManyToOne(() => User, user => user.questions, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'userId' })
  public user!: User;

  @OneToMany(() => Answer, answers => answers.question)
  public answers!: Answer[];
}
