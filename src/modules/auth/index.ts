import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import * as Settings from '@src/server/settings';
import { AuthService } from './services';

@Module({
  imports: [
    JwtModule.register({
      secret: Settings.AUTH_KEY_SECURITY,
      signOptions: { expiresIn: Settings.AUTH_KEY_TOKEN_EXPIRES }
    })
  ],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
