import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { IAnswer } from '../interfaces/answer';
import { Question } from './question';

@Entity('answer')
export class Answer implements IAnswer {
  @PrimaryColumn({ type: 'uuid', name: 'answer_id' })
  public answerId!: string;

  @Column({ type: 'uuid', name: 'question_id' })
  public questionId!: string;

  @Column({ type: 'varchar' })
  public description!: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', default: 'now()' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', default: 'now()' })
  public updatedAt!: Date;

  @ManyToOne(() => Question, question => question.answers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'question_id', referencedColumnName: 'questionId' })
  public question!: Question;
}
