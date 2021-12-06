import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entities/user';
import { UserController } from './controllers/user';
import { UserCustomRepository } from './repositories';
import { UserService } from './services';

@Module({
  controllers: [UserController],
  providers: [UserService, UserCustomRepository],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserService]
})
export class UserModule {}
