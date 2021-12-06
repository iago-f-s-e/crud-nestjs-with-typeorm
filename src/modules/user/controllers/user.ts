import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put
} from '@nestjs/common';
import { AuthorizedUser } from '@src/modules/common/guard/token';
import { IUser } from '@src/modules/database/interfaces/user';
import { SaveUser } from '../interfaces/save-user';
import { UpdateUser } from '../interfaces/update-user';
import { UserService } from '../services';
import { ValidateUser } from '../validators/save-user';
import { ValidateUpdateUser } from '../validators/update-user';
import { UserControllerDTO } from './dtos/user';

@Controller('user')
export class UserController implements UserControllerDTO {
  constructor(private readonly userService: UserService) {}

  @Get('')
  public listAll() {
    return this.userService.findAll();
  }

  @Put(':userId')
  public async update(
    @Param('userId', ParseUUIDPipe) userId: string,
    @Body() body: UpdateUser,
    @AuthorizedUser() user: IUser
  ) {
    const updateUserOrError = ValidateUpdateUser.create(body);

    if (updateUserOrError.isLeft()) {
      throw new BadRequestException(updateUserOrError.value.message);
    }

    const data = updateUserOrError.value;

    return this.userService.update(userId, data.value, user);
  }

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
