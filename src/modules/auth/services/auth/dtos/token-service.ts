export interface TokenServiceDTO {
  generateToken: (userId: string) => string;
}
