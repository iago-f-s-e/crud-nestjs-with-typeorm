export interface PasswordServiceDTO {
  hashing: (pass: string, salt?: number) => Promise<string>;
}
