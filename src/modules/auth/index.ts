import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entities/user';
import { UserCustomRepository } from './repositories/user';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserCustomRepository]
})
export class AuthModule {}
