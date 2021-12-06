import { PasswordServiceDTO } from './dtos/password-service';
import bcrypt from 'bcrypt';

export class PasswordService implements PasswordServiceDTO {
  public hashing(pass: string, salt = 10): Promise<string> {
    return bcrypt.hash(pass, salt);
  }
}
