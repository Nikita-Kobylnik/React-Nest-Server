import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './cart.entity';
import { AutopartService } from 'src/autopart/autopart.service';
import { AutopartEntity } from 'src/autopart/autopart.entity';
import { ManufacturerService } from 'src/manufacturer/manufacturer.service';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, AutopartEntity])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
