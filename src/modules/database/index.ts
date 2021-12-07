import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mongooseURI } from './config/mongo-config';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MongooseModule.forRoot(mongooseURI, {
      dbName: 'crud_nestjs'
    })
  ]
})
export class DatabaseModule {}
