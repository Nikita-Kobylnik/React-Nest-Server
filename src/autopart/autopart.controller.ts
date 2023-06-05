import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AutopartEntity } from './autopart.entity';
import { AutopartService } from './autopart.service';
import { AutopartDto } from './dtos/autopart.dto';
import { UpdateAutopartDto } from './dtos/update-autopart.dto';
import { AdminGuard } from 'src/user/guards/admin.guard';
import { PaginatedResult } from 'src/common/interfaces/paginated-result.interface';
@Controller('autopart')
export class AutopartController {
  constructor(private readonly autopartServiсe: AutopartService) {}

  @Get()
  private getAllWithManufacturer() {
    return this.autopartServiсe.getAllWithManufacturer();
  }

  @Get('paginate')
  private getPaginate(
    @Query('page', ParseIntPipe) page: number,
  ): Promise<PaginatedResult<AutopartEntity>> {
    return this.autopartServiсe.paginate(page);
  }

  // @Get()
  // findAll(): Promise<AutopartEntity[]> {
  //   return this.autopartServiсe.all();
  // }

  @Get('count')
  async getAllAndCount() {
    return await this.autopartServiсe.getAllAndCount();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<AutopartEntity> {
    const autopart = this.autopartServiсe.findOne(
      {
        id,
      },
      ['manufacturer'],
    );
    return autopart;
  }

  @Get('subcategory/:id')
  async getAllBySubcategoryId(@Param('id') id: number) {
    return this.autopartServiсe.getAllBySubcategoryId(id);
  }

  @Get('manufacturer/:id')
  async getAllByManufacturerId(@Param('id') id: number) {
    return this.autopartServiсe.getAllByManufacturerId(id);
  }

  // @UseGuards(AdminGuard)
  @Delete(':id')
  async deleteById(@Param('id') id: number) {
    await this.autopartServiсe.deleteById(id);
    return { message: 'Autopart deleted successfully' };
  }

  // @UseGuards(AdminGuard)
  @Post('create')
  async create(@Body() autopart: AutopartDto) {
    return this.autopartServiсe.create(autopart);
  }

  @Get('car/:id')
  async getAllByCarId(@Param('id') id: number) {
    return this.autopartServiсe.getAllByCarId(id);
  }

  // @UseGuards(AdminGuard)
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAutopart: UpdateAutopartDto,
  ) {
    return this.autopartServiсe.update(id, updateAutopart);
  }
}
