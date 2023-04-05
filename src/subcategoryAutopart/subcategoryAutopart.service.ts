import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubcategoryAutopartEntity } from './subcategoryAutopart.entity';

@Injectable()
export class SubcategoryAutopartService {
  @InjectRepository(SubcategoryAutopartEntity)
  private readonly subcategoryAutopartRepository: Repository<SubcategoryAutopartEntity>;
}
