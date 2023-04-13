import { Injectable } from '@nestjs/common';
import { ManufacturerEntity } from './manufacturer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ManufacturerService {
  constructor(
    @InjectRepository(ManufacturerEntity)
    private readonly manufacturerRepository: Repository<ManufacturerEntity>,
  ) {}
  async getAllManufacturer(): Promise<ManufacturerEntity[]> {
    return await this.manufacturerRepository.find();
  }

  async getById(id: number): Promise<ManufacturerEntity> {
    return this.manufacturerRepository.findOne({
      where: { id },
    });
  }
}
