import { Either, left, right } from '@src/shared/either';
import { SaveCategory, SaveValidatedCategory } from '../../interfaces/category/save-category';
import { InvalidTitleError } from '../errors/invalid-title';
import { Title } from './implementations/title';

interface Validated {
  title: Title;
}

export class ValidateSaveCategory {
  private readonly title: Title;

  private constructor({ title }: Validated) {
    this.title = title;

    Object.freeze(this);
  }

  public static create(data: SaveCategory): Either<InvalidTitleError, ValidateSaveCategory> {
    const nameOrError = Title.create(data.title);

    if (nameOrError.isLeft()) return left(nameOrError.value);

    const title = nameOrError.value;

    return right(new ValidateSaveCategory({ title }));
  }

  public get value(): Readonly<SaveValidatedCategory> {
    return Object.freeze({
      title: this.title.value
    });
  }
}
