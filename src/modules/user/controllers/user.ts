import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { SaveUser } from '../interfaces/save-user';
import { UserService } from '../services';
import { ValidateUser } from '../validators/save-user';
import { UserControllerDTO } from './dtos/user';

@Controller('user')
export class UserController implements UserControllerDTO {
  constructor(private readonly userService: UserService) {}

  @Post('')
  public async create(@Body() data: SaveUser) {
    const validatedUserOrError = await ValidateUser.create(data);

    if (validatedUserOrError.isLeft()) {
      throw new BadRequestException(validatedUserOrError.value.message);
    }

    const validatedUser = validatedUserOrError.value;

    return this.userService.create(validatedUser.value);
  }
}
