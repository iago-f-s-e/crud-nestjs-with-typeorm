import { Either, left, right } from '@src/shared/either';
import { InvalidNameError } from '../errors/invalid-name';

export class Name {
  private readonly name: string;

  constructor(name: string) {
    this.name = name.trim().toUpperCase();
  }

  public static create(name: string): Either<InvalidNameError, Name> {
    if (!Name.validate(name)) return left(new InvalidNameError(name));

    return right(new Name(name));
  }

  public get value(): string {
    return this.name;
  }

  public static validate(name: string): boolean {
    if (!name || name.trim().length < 3) return false;

    return true;
  }
}
