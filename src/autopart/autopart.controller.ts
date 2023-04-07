import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AutopartEntity } from './autopart.entity';
import { AutopartService } from './autopart.service';
import { AutopartDto } from './dtos/autopart.dto';
import { UpdateAutopartDto } from './dtos/update-autopart.dto';
@Controller('autopart')
export class AutopartController {
  constructor(private readonly autopartServise: AutopartService) {}
  @Get()
  findAll(): Promise<AutopartEntity[]> {
    return this.autopartServise.all();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<AutopartEntity> {
    let autopart = this.autopartServise.findOne({ id });
    return autopart;
  }
  @Get('subcategory/:id')
  async getAllBySubcategoryId(@Param('id') id: number) {
    return this.autopartServise.getAllBySubcategoryId(id);
  }

  @Get('manufacturer/:id')
  async getAllByManufacturerId(@Param('id') id: number) {
    return this.autopartServise.getAllByManufacturerId(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number) {
    await this.autopartServise.deleteById(id);
    return { message: 'Autopart deleted successfully' };
  }

  @Post('create')
  async create(@Body() autopart: AutopartDto) {
    return this.autopartServise.create(autopart);
  }

  @Get('car/:id')
  async getAllByCarId(@Param('id') id: number) {
    return this.autopartServise.getAllByCarId(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAutopart: UpdateAutopartDto,
  ) {
    return this.autopartServise.update(id, updateAutopart);
  }
}
