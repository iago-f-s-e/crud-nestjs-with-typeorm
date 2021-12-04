import { hashPassword } from '@src/modules/common/infra';
import { Either, left, right } from '@src/shared/either';
import { InvalidPasswordError } from '../errors/invalid-password';

type ValidatedResponse = Either<InvalidPasswordError, Password>;

export class Password {
  private readonly password: string;

  constructor(password: string) {
    this.password = password;
  }

  public static async create(password: string, hash = hashPassword): Promise<ValidatedResponse> {
    if (!Password.validate(password)) return left(new InvalidPasswordError(password));

    return right(new Password(await hash(password)));
  }

  public get value(): string {
    return this.password;
  }

  public static validate(password: string): boolean {
    if (!password || password.length < 8) return false;

    return true;
  }
}
