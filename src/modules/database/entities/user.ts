import { Column, CreateDateColumn, Entity, Index, OneToMany, PrimaryColumn } from 'typeorm';
import { IUser } from '../interfaces/user';
import { Question } from './question';

@Entity('user')
export class User implements IUser {
  @PrimaryColumn({ type: 'uuid', name: 'user_id' })
  public userId!: string;

  @Column({ type: 'varchar' })
  public name!: string;

  @Index({ unique: true })
  @Column({ type: 'varchar' })
  public email!: string;

  @Column({ type: 'varchar' })
  public password!: string;

  @Index({ unique: false })
  @Column({ type: 'boolean', default: true })
  public isActive!: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', default: 'now()' })
  public createdAt!: Date;

  @OneToMany(() => Question, questions => questions.user)
  public questions!: Question[];
}
