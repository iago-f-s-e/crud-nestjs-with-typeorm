import { IQuestion } from './question';

export interface ICategory {
  categoryId: string;
  title: string;

  questions: IQuestion[];
}
