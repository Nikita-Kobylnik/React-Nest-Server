import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarEntity } from './car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarEntity)
    private readonly carRepository: Repository<CarEntity>,
  ) {}

  async getAllByCarBrandId(id: number): Promise<CarEntity[]> {
    return await this.carRepository.find({
      where: { carBrand: { id: id } },
    });
  }

  async getById(id: number): Promise<CarEntity> {
    return this.carRepository.findOne({
      where: { id },
    });
  }
}
