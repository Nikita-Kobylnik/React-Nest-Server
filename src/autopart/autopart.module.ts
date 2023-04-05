import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutopartController } from './autopart.controller';
import { AutopartEntity } from './autopart.entity';
import { AutopartService } from './autopart.service';
import { SubcategoryModule } from 'src/subcategory/subcategory.module';
import { SubcategoryService } from 'src/subcategory/subcategory.service';
import { SubcategoryEntity } from 'src/subcategory/subcategory.entity';
import { SubcategoryAutopartEntity } from 'src/subcategoryAutopart/subcategoryAutopart.entity';
import { SubcategoryAutopartService } from 'src/subcategoryAutopart/subcategoryAutopart.service';
import { ManufacturerEntity } from 'src/manufacturer/manufacturer.entity';
import { ManufacturerService } from 'src/manufacturer/manufacturer.service';
import { CarEntity } from 'src/car/car.entity';
import { CarService } from 'src/car/car.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AutopartEntity,
      SubcategoryEntity,
      SubcategoryAutopartEntity,
      ManufacturerEntity,
      CarEntity,
    ]),
  ],
  controllers: [AutopartController],
  providers: [
    AutopartService,
    SubcategoryService,
    SubcategoryAutopartService,
    ManufacturerService,
    CarService,
  ],
})
export class AutopartModule {}
