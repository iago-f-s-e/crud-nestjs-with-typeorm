import { ICategory } from '@src/modules/database/interfaces/category';

export type SaveCategory = Pick<ICategory, 'title'>;

export type SaveValidatedCategory = SaveCategory;
