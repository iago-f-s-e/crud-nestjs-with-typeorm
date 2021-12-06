import { Module } from '@nestjs/common';
import { PasswordService } from './services/password-service';

@Module({
  exports: [PasswordService],
  providers: [PasswordService]
})
export class CommonModule {}
