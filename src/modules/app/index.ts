import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from '../admin';
import { AuthAdmin } from '../admin/middlewares/auth-admin';
import { CommonModule } from '../common';
import { Category } from '../database/entities/category';
import { CategoryController } from './controller/category-controller';
import { CategoryCustomRepository } from './repositories/category-repository';
import { CategoryService } from './services/category-service';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), CommonModule, AdminModule],
  providers: [CategoryService, CategoryCustomRepository],
  controllers: [CategoryController]
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthAdmin).forRoutes('category');
  }
}
