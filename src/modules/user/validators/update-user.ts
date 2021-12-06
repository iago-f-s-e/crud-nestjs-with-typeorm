import { Either, left, right } from '@src/shared/either';
import { Name } from './implementations/name';
import { InvalidNameError } from './errors/invalid-name';
import { UpdateUser, UpdateValidatedUser } from '../interfaces/update-user';

interface Validated {
  name: Name;
}

type UserErrors = InvalidNameError;

export class ValidateUpdateUser {
  private readonly name: Name;

  private constructor({ name }: Validated) {
    this.name = name;

    Object.freeze(this);
  }

  public static create(data: UpdateUser): Either<UserErrors, ValidateUpdateUser> {
    const nameOrError = Name.create(data.name);

    if (nameOrError.isLeft()) return left(nameOrError.value);

    const name = nameOrError.value;

    return right(new ValidateUpdateUser({ name }));
  }

  public get value(): Readonly<UpdateValidatedUser> {
    return Object.freeze({
      name: this.name.value
    });
  }
}
