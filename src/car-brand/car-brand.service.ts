import { Injectable } from '@nestjs/common';
import { CreateCarBrandDto } from './dto/create-car-brand.dto';

@Injectable()
export class CarBrandService {
  create(createCarBrandDto: CreateCarBrandDto) {
    return 'This action adds a new carBrand';
  }

  findAll() {
    return `This action returns all carBrand`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carBrand`;
  }

  remove(id: number) {
    return `This action removes a #${id} carBrand`;
  }
}
