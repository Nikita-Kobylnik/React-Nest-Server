import { Module } from '@nestjs/common';
import { CarBrandService } from './car-brand.service';
import { CarBrandController } from './car-brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBrandEntity } from './car-brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarBrandEntity])],
  controllers: [CarBrandController],
  providers: [CarBrandService],
})
export class CarBrandModule {}
