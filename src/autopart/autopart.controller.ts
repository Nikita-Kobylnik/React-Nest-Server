import { Controller, Get, Param } from '@nestjs/common';
import { AutopartEntity } from './autopart.entity';
import { AutopartService } from './autopart.service';
@Controller('autopart')
export class AutopartController {
  constructor(private readonly autopartServise: AutopartService) {}
  @Get()
  findAll(): Promise<AutopartEntity[]> {
    return this.autopartServise.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<AutopartEntity> {
    return this.autopartServise.findOne(id);
  }
}
