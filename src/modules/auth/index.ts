import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entities/user';
import { UserController } from './controllers/user';
import { UserCustomRepository } from './repositories/user';
import { UserService } from './services/user';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserCustomRepository],
  controllers: [UserController]
})
export class AuthModule {}
