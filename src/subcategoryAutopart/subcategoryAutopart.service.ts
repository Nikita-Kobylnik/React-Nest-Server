import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubcategoryAutopartEntity } from './subcategoryAutopart.entity';

@Injectable()
export class SubcategoryAutopartService {
  constructor(
    @InjectRepository(SubcategoryAutopartEntity)
    private readonly subcategoryAutopartRepository: Repository<SubcategoryAutopartEntity>,
  ) {}
  async getSubcategoryById(id: number) {
    return this.subcategoryAutopartRepository.find({
      where: { subcategory_id_subcategory: id },
      relations: ['autopart'],
    });
  }
}
