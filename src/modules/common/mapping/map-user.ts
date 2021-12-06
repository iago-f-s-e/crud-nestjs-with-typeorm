import { MappedUser } from '@src/modules/auth/interfaces/mapped-user';
import { IUser } from '@src/modules/database/interfaces/user';

export function mapUser({ userId, email, name, questions }: IUser): MappedUser {
  return {
    id: userId,
    email,
    name,
    questions
  };
}
