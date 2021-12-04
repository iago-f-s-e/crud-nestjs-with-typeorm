import { Either, left, right } from '@src/shared/either';
import { InvalidEmailError } from '../errors/invalid-email';

export class Email {
  private readonly email: string;

  constructor(email: string) {
    this.email = email.toLowerCase();
  }

  public static create(email: string): Either<InvalidEmailError, Email> {
    if (!Email.validate(email)) return left(new InvalidEmailError(email));

    return right(new Email(email));
  }

  public get value(): string {
    return this.email;
  }

  public static validate(email: string): boolean {
    if (!email) return false;

    if (!email.includes('@') || email.includes(' ')) return false;

    return true;
  }
}
