import { Body, Controller, Post } from '@nestjs/common';
import { User } from '@src/modules/database/entities/user';
import { UserService } from '../services/user';
import { SaveValidatedUser } from '../validators/save-user';
import { UserControllerDTO } from './dtos/user';

@Controller('user')
export class UserController implements UserControllerDTO {
  constructor(private readonly userService: UserService) {}

  @Post('')
  public create(@Body() data: SaveValidatedUser): Promise<User> {
    return this.userService.create(data);
  }
}
