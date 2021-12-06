export interface PasswordServiceDTO {
  hashing: (pass: string, salt?: number) => Promise<string>;
  compare: (pass: string, hashedPassword: string) => Promise<boolean>;
}
