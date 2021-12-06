import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common';
import { UserToken } from '../common/middlewares/user-token';
import { User } from '../database/entities/user';
import { UserController } from './controllers/user';
import { UserCustomRepository } from './repositories';
import { UserService } from './services';

@Module({
  controllers: [UserController],
  providers: [UserService, UserCustomRepository],
  imports: [TypeOrmModule.forFeature([User]), CommonModule],
  exports: [UserService]
})
export class UserModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserToken).forRoutes({
      method: RequestMethod.GET,
      path: 'user'
    });
  }
}
