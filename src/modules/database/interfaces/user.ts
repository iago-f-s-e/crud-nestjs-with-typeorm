import { IQuestion } from './question';

export interface IUser {
  userId: string;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  createdAt: Date;

  questions: IQuestion[];
}
