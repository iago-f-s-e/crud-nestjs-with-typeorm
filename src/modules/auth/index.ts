import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entities/user';
import { UserController } from './controllers/user';
import { UserCustomRepository } from './repositories/user';
import { AuthService } from './services/auth';
import { UserService } from './services/user';

import * as Settings from '@src/server/settings';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: Settings.AUTH_KEY_SECURITY,
      signOptions: { expiresIn: Settings.AUTH_KEY_TOKEN_EXPIRES }
    })
  ],
  providers: [AuthService, UserService, UserCustomRepository],
  controllers: [UserController],
  exports: [AuthService]
})
export class AuthModule {}
