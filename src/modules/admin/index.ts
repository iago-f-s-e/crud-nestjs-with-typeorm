import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common';
import { Admin } from '../database/entities/admin';
import { UserModule } from '../user';
import { AdminController } from './controllers';
import { AuthAdmin } from './middlewares/auth-admin';
import { AdminCustomRepository } from './repositories';
import { AdminService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Admin]), CommonModule, UserModule],
  exports: [AdminService, AuthAdmin],
  providers: [AdminService, AdminCustomRepository, AuthAdmin],
  controllers: [AdminController]
})
export class AdminModule {}
