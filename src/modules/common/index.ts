import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PasswordService } from './services/password-service';
import { TokenService } from './services/token-service';

import * as Settings from '@src/server/settings';
@Module({
  imports: [
    JwtModule.register({
      secret: Settings.AUTH_KEY_SECURITY,
      signOptions: { expiresIn: Settings.AUTH_KEY_TOKEN_EXPIRES }
    })
  ],
  exports: [PasswordService, TokenService],
  providers: [PasswordService, TokenService]
})
export class CommonModule {}
