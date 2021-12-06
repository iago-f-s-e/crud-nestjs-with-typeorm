import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { SaveCategory } from '../interfaces/category/save-category';
import { CategoryService } from '../services/category-service';
import { ValidateSaveCategory } from '../validators/category/save-category';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('')
  public async create(@Body() body: SaveCategory) {
    const validatedOrError = ValidateSaveCategory.create(body);

    if (validatedOrError.isLeft()) {
      throw new BadRequestException(validatedOrError.value.message);
    }

    const validated = validatedOrError.value;

    const categoryOrError = await this.categoryService.create(validated.value);

    if (categoryOrError.isLeft()) {
      throw categoryOrError.value;
    }

    return categoryOrError.value;
  }
}
