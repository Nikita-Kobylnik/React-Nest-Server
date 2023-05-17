import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarBrandService } from './car-brand.service';
import { CreateCarBrandDto } from './dto/create-car-brand.dto';

@Controller('car-brand')
export class CarBrandController {
  constructor(private readonly carBrandService: CarBrandService) {}

  @Post()
  private create(@Body() createCarBrandDto: CreateCarBrandDto) {
    return this.carBrandService.create(createCarBrandDto);
  }

  @Get(':id')
  private findOne(@Param('id') id: string) {
    return this.carBrandService.findOne(+id);
  }

  @Get('/all')
  private getAll() {
    return this.carBrandService.getAll();
  }

  @Get()
  private getAllWithCar() {
    return this.carBrandService.getAllWithCar();
  }

  @Get('/car/:id')
  private getOneWithAllCarById(@Param('id') id: number) {
    return this.carBrandService.getOneWithAllCarById(id);
  }

  @Delete(':id')
  private remove(@Param('id') id: string) {
    return this.carBrandService.remove(+id);
  }
}
