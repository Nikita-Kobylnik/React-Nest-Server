import { Controller, Get, Param } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerEntity } from './manufacturer.entity';

@Controller('manufacturer')
export class ManufacturerController {
  constructor(private readonly manufacturerService: ManufacturerService) {}
  @Get()
  getAllManufacturer(): Promise<ManufacturerEntity[]> {
    return this.manufacturerService.getAllManufacturer();
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<ManufacturerEntity> {
    return this.manufacturerService.getById(id);
  }
}
