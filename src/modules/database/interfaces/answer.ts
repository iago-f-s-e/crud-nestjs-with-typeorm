import { IQuestion } from './question';

export interface IAnswer {
  answerId: string;
  questionId: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  question: IQuestion;
}
