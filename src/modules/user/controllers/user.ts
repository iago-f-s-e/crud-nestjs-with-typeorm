import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { AuthorizedUser } from '@src/modules/common/guard/token';
import { IAuthorizedUser } from '@src/modules/common/services/dtos/token-service';
import { SaveUser } from '../interfaces/save-user';
import { UserService } from '../services';
import { ValidateUser } from '../validators/save-user';
import { UserControllerDTO } from './dtos/user';

@Controller('user')
export class UserController implements UserControllerDTO {
  constructor(private readonly userService: UserService) {}

  @Get('')
  public listAll(@AuthorizedUser() user: IAuthorizedUser) {
    console.log('🚀 ~ file: user.ts ~ line 14 ~ UserController ~ listAll ~ user', user);

    return this.userService.findAll();
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
