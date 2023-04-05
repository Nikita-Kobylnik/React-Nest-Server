import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MainCategoryEntity } from './mainCategory.entity';

@Injectable()
export class MainCategoryService {
  constructor(
    @InjectRepository(MainCategoryEntity)
    private readonly mainCategoryRepositote: Repository<MainCategoryEntity>,
  ) {}
  async findAll(): Promise<MainCategoryEntity[]> {
    return await this.mainCategoryRepositote.find();
  }
}
