import { Either, left, right } from '@src/shared/either';
import { InvalidPasswordError } from '../errors/invalid-password';

export class Password {
  private readonly password: string;

  constructor(password: string) {
    this.password = password;
  }

  public static create(password: string): Either<InvalidPasswordError, Password> {
    if (!Password.validate(password)) return left(new InvalidPasswordError(password));

    return right(new Password(password));
  }

  public get value(): string {
    return this.password;
  }

  public static validate(password: string): boolean {
    if (!password || password.length < 8) return false;

    return true;
  }
}
