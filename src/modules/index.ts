import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { DatabaseModule } from './database';
import { UserModule } from './user';

@Module({
  imports: [DatabaseModule, AuthModule, UserModule]
})
export class Modules {}
