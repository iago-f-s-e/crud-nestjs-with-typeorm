import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common';
import { User } from '../database/entities/user';
import { UserModel } from '../database/schemas/user';
import { UserController } from './controllers/user';
import { AuthUser } from './middlewares/auth-user';
import { UserCustomRepository } from './repositories';
import { UserService } from './services';

@Module({
  controllers: [UserController],
  providers: [UserService, UserCustomRepository, AuthUser],
  imports: [TypeOrmModule.forFeature([User]), MongooseModule.forFeature([UserModel]), CommonModule],
  exports: [UserService]
})
export class UserModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthUser).forRoutes(
      {
        method: RequestMethod.PUT,
        path: 'user/*'
      },
      {
        method: RequestMethod.DELETE,
        path: 'user/*'
      }
    );
  }
}
