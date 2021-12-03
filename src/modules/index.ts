import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { DatabaseModule } from './database';

@Module({
  imports: [DatabaseModule, AuthModule]
})
export class Modules {}
