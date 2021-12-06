import { Module } from '@nestjs/common';
import { AdminModule } from './admin';
import { AppModule } from './app';
import { AuthModule } from './auth';
import { DatabaseModule } from './database';
import { UserModule } from './user';

@Module({
  imports: [DatabaseModule, AuthModule, UserModule, AdminModule, AppModule]
})
export class Modules {}
