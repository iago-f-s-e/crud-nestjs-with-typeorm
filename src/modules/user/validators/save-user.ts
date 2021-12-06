import { Either, left, right } from '@src/shared/either';
import * as Validate from './implementations';
import * as Errors from './errors';
import { SaveUser, SaveValidatedUser } from '../interfaces/save-user';

interface Validated {
  email: Validate.Email;
  name: Validate.Name;
  password: Validate.Password;
}

type UserErrors = Errors.InvalidEmailError | Errors.InvalidNameError | Errors.InvalidPasswordError;

type ValidateResponse = Either<UserErrors, ValidateUser>;

export class ValidateUser {
  private readonly email: Validate.Email;
  private readonly name: Validate.Name;
  private readonly password: Validate.Password;

  private constructor({ email, name, password }: Validated) {
    this.email = email;
    this.name = name;
    this.password = password;

    Object.freeze(this);
  }

  public static async create(data: SaveUser): Promise<ValidateResponse> {
    const nameOrError = Validate.Name.create(data.name);
    const emailOrError = Validate.Email.create(data.email);
    const passwordOrError = await Validate.Password.create(data.password);

    if (nameOrError.isLeft()) return left(nameOrError.value);

    if (emailOrError.isLeft()) return left(emailOrError.value);

    if (passwordOrError.isLeft()) return left(passwordOrError.value);

    const name = nameOrError.value;
    const email = emailOrError.value;
    const password = passwordOrError.value;

    return right(new ValidateUser({ name, email, password }));
  }

  public get value(): Readonly<SaveValidatedUser> {
    return Object.freeze({
      email: this.email.value,
      name: this.name.value,
      password: this.password.value
    });
  }
}
