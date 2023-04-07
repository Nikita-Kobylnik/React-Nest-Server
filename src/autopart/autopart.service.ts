import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { AutopartEntity } from './autopart.entity';
import { Repository, FindOneOptions, FindManyOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SubcategoryAutopartEntity } from 'src/subcategoryAutopart/subcategoryAutopart.entity';
import { AutopartDto } from './dtos/autopart.dto';
import { ManufacturerEntity } from 'src/manufacturer/manufacturer.entity';
import { CarEntity } from 'src/car/car.entity';
import { IS_MOBILE_PHONE } from 'class-validator';
import { AbstractService } from 'src/common/abstract.service';

@Injectable()
export class AutopartService extends AbstractService<AutopartEntity> {
  constructor(
    @InjectRepository(AutopartEntity)
    private readonly autopartRepository: Repository<AutopartEntity>,
    @InjectRepository(SubcategoryAutopartEntity)
    private readonly subcategoryAutopartRepository: Repository<SubcategoryAutopartEntity>,
    @InjectRepository(ManufacturerEntity)
    private readonly manufacturerRepository: Repository<ManufacturerEntity>,
    @InjectRepository(CarEntity)
    private readonly carRepository: Repository<CarEntity>,
  ) {
    super(autopartRepository);
  }

  async getAllBySubcategoryId(id: number) {
    const subcategory = await this.subcategoryAutopartRepository.find({
      where: { subcategory_id_subcategory: id },
      relations: ['autopart'],
    });
    return subcategory.map((subcatAutopart) => subcatAutopart.autopart);
  }

  async getAllByManufacturerId(id: number): Promise<AutopartEntity[]> {
    return await this.autopartRepository.find({
      where: { manufacturer: { id } },
    });
  }

  async deleteById(id: number) {
    await this.autopartRepository.delete(id);
  }

  async create(@Body() autopartDto: AutopartDto): Promise<AutopartEntity> {
    const manufacturer = await this.manufacturerRepository.findOne({
      where: { id: autopartDto.fk_id_manufacturer },
    }); // Поменять на сервис
    if (!manufacturer) {
      throw new NotFoundException(
        `Manufacturer with ID ${autopartDto.fk_id_manufacturer} not found`,
      );
    }

    const car = await this.carRepository.findOne({
      where: { id: autopartDto.fk_car_id },
    });
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

  async getAllByCarId(id: number): Promise<AutopartEntity[]> {
    return this.autopartRepository.find({
      where: { car: { id: id } },
    });
  }

  async getAllByCarYear(): Promise<AutopartEntity[]> {
    return;
  }
}
