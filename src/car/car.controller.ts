import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { CarService } from './car.service';
import { CarEntity } from './car.entity';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get('/all')
  private getAll() {
    return this.carService.getAll();
  }

  @Get('carBrand/:id')
  private getAllByCarBrandId(@Param('id') id: number): Promise<CarEntity[]> {
    return this.carService.getAllByCarBrandId(id);
  }

  @Get(':id')
  private getById(@Param('id') id: number): Promise<CarEntity> {
    return this.carService.getById(id);
  }
}
