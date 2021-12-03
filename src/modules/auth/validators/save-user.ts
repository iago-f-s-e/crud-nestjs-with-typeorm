import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { IUser } from '@src/modules/database/interfaces/user';

type SaveUser = Pick<IUser, 'name' | 'email' | 'password'>;

export class SaveValidatedUser implements SaveUser {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  public name!: string;

  @IsNotEmpty()
  @IsEmail()
  public email!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  public password!: string;
}
