import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from './car.entity';
import { AutopartService } from 'src/autopart/autopart.service';
import { AutopartEntity } from 'src/autopart/autopart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarEntity])],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
