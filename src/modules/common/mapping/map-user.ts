import { IUser } from '@src/modules/database/interfaces/user';
import { MappedUser } from '@src/modules/user/interfaces/mapped-user';

export function mapUser({ userId, email, name, questions }: IUser): MappedUser {
  return {
    id: userId,
    email,
    name,
    questions
  };
}
