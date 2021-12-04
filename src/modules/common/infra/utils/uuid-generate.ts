import { randomUUID } from 'crypto';

export function uuidGenerate(): string {
  return randomUUID();
}
