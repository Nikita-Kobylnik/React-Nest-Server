import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SubcategoryEntity } from './subcategory.entity';

@Injectable()
export class SubcategoryService {
  constructor(
    @InjectRepository(SubcategoryEntity)
    private readonly subcategoryRepository: Repository<SubcategoryEntity>,
  ) {}

  async getAllByMainCategoryId(id: number): Promise<SubcategoryEntity[]> {
    return await this.subcategoryRepository.find({
      where: { mainCategory: { id: id } },
    });
  }

  async getAllSubcategories(): Promise<any> {
    return await this.subcategoryRepository.find();
  }

  async getAutopartsBySubcategory(id: number) {
    return await this.subcategoryRepository.findOne({
      where: { id },
      relations: ['subcategoryAutopart'],
    });
  }
}
