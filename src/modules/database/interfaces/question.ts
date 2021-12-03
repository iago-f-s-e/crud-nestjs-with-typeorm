import { IAnswer } from './answer';
import { ICategory } from './category';
import { IUser } from './user';

export interface IQuestion {
  questionId: string;
  categoryId: string;
  userId: string;
  title: string;
  description: string;
  isOpen: boolean;
  createdAt: Date;
  updatedAt: Date;

  category: ICategory;
  user: IUser;
  answers: IAnswer[];
}
