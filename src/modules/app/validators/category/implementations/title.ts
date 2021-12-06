import { Either, left, right } from '@src/shared/either';
import { InvalidTitleError } from '../../errors/invalid-title';

export class Title {
  private readonly title: string;

  constructor(title: string) {
    this.title = title.trim().toUpperCase();
  }

  public static create(title: string): Either<InvalidTitleError, Title> {
    if (!Title.validate(title)) return left(new InvalidTitleError(title));

    return right(new Title(title));
  }

  public get value(): string {
    return this.title;
  }

  public static validate(title: string): boolean {
    if (!title || title.trim().length < 3) return false;

    return true;
  }
}
