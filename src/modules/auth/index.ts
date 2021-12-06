import { Module } from '@nestjs/common';
import { CommonModule } from '../common';

import { UserModule } from '../user';
import { AuthController } from './controllers/auth';
import { AuthService } from './services';

@Module({
  imports: [UserModule, CommonModule],
  providers: [AuthService],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
