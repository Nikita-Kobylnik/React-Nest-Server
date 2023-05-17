import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MainCategoryEntity } from './mainCategory.entity';
import { SubcategoryService } from 'src/subcategory/subcategory.service';

@Injectable()
export class MainCategoryService {
  constructor(
    @InjectRepository(MainCategoryEntity)
    private readonly mainCategoryRepository: Repository<MainCategoryEntity>,
  ) {}
  async findAll(): Promise<MainCategoryEntity[]> {
    return await this.mainCategoryRepository.find();
  }

  async getAllWithSubcategories() {
    return await this.mainCategoryRepository.find({
      relations: ['subcategoreis'],
    });
  }
}
