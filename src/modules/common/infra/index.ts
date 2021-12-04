import bcrypt from 'bcrypt';

export async function hashPassword(password: string, salt = 10): Promise<string> {
  return bcrypt.hash(password, salt);
}
