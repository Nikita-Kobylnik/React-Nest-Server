import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { AutopartEntity } from './autopart.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SubcategoryAutopartEntity } from 'src/subcategoryAutopart/subcategoryAutopart.entity';
import { AutopartDto } from './dtos/autopart.dto';
import { AbstractService } from 'src/common/abstract.service';
import { ManufacturerService } from 'src/manufacturer/manufacturer.service';
import { CarService } from 'src/car/car.service';
import { SubcategoryAutopartService } from 'src/subcategoryAutopart/subcategoryAutopart.service';
import { PaginatedResult } from 'src/common/interfaces/paginated-result.interface';

@Injectable()
export class AutopartService extends AbstractService<AutopartEntity> {
  constructor(
    @InjectRepository(AutopartEntity)
    private readonly autopartRepository: Repository<AutopartEntity>,
    private readonly manufacturerService: ManufacturerService,
    private readonly carService: CarService,
    private readonly subcategoryAutopartService: SubcategoryAutopartService,
  ) {
    super(autopartRepository);
  }

  async create(@Body() autopartDto: AutopartDto): Promise<AutopartEntity> {
    const manufacturer = await this.manufacturerService.getById(
      autopartDto.fk_id_manufacturer,
    );
    if (!manufacturer) {
      throw new NotFoundException(
        `Manufacturer with ID ${autopartDto.fk_id_manufacturer} not found`,
      );
    }

    const car = await this.carService.getById(autopartDto.fk_car_id);
    if (!car) {
      throw new NotFoundException(
        `Car with ID ${autopartDto.fk_car_id} not found`,
      );
    }

    const autopart = new AutopartEntity();
    autopart.manufacturer = manufacturer;
    autopart.car = car;
    autopart.name = autopartDto.name;
    autopart.price = autopartDto.price;
    autopart.description = autopartDto.description;
    autopart.amount = autopartDto.amount;

    return this.autopartRepository.save(autopart);
  }

  async deleteById(id: number) {
    await this.autopartRepository.delete(id);
  }

  async getAllAndCount(): Promise<[AutopartEntity[], number]> {
    return await this.autopartRepository.findAndCount();
  }

  async getAllByCarId(id: number): Promise<AutopartEntity[]> {
    return this.autopartRepository.find({
      where: { car: { id: id } },
    });
  }

  async getAllByManufacturerId(id: number): Promise<AutopartEntity[]> {
    return await this.autopartRepository.find({
      where: { manufacturer: { id } },
    });
  }

  async getAllBySubcategoryId(id: number) {
    const subcategory =
      await this.subcategoryAutopartService.getSubcategoryById(id);
    // find({
    //   where: { subcategory_id_subcategory: id },
    //   relations: ['autopart'],
    // });
    subcategory.map((subcatAutopart) => console.log(subcatAutopart.autopart));
    return subcategory.map((subcatAutopart) => subcatAutopart.autopart);
  }

  async getAllWithManufacturer(): Promise<AutopartEntity[]> {
    return await this.autopartRepository.find({
      relations: ['manufacturer'],
    });
  }

  async paginate(page: number): Promise<PaginatedResult<AutopartEntity>> {
    return super.paginate(page, ['manufacturer']);
  }
}
