import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { IAdmin } from '../interfaces/admin';
import { User } from './user';

@Entity('admin')
export class Admin implements IAdmin {
  @PrimaryColumn({ type: 'uuid', name: 'admin_id' })
  public adminId!: string;

  @Column({ type: 'uuid', name: 'user_id' })
  public userId!: string;

  @OneToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'userId' })
  public user!: User;
}
