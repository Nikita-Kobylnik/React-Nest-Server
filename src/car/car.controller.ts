import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { CarService } from './car.service';
import { CarEntity } from './car.entity';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}
  @Get('carBrand/:id')
  getAllByCarBrandId(@Param('id') id: number): Promise<CarEntity[]> {
    return this.carService.getAllByCarBrandId(id);
  }
}
