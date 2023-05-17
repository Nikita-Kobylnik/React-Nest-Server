import { Injectable } from '@nestjs/common';
import { CreateCarBrandDto } from './dto/create-car-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CarBrandEntity } from './car-brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarBrandService {
  constructor(
    @InjectRepository(CarBrandEntity)
    private readonly carBrandRepository: Repository<CarBrandEntity>,
  ) {}
  create(createCarBrandDto: CreateCarBrandDto) {
    return 'This action adds a new carBrand';
  }

  findOne(id: number) {
    return `This action returns a #${id} carBrand`;
  }

  getAll(): Promise<CarBrandEntity[]> {
    return this.carBrandRepository.find();
  }

  getAllWithCar() {
    return this.carBrandRepository.find({
      relations: ['car'],
    });
  }

  getOneWithAllCarById(id: number) {
    return this.carBrandRepository.find({
      relations: ['car'],
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} carBrand`;
  }
}
