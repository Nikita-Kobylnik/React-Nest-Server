import { Module } from '@nestjs/common';
import { DeliveryMethodService } from './delivery-method.service';
import { DeliveryMethodController } from './delivery-method.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryMethodEntity } from './delivery-method.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryMethodEntity])],
  controllers: [DeliveryMethodController],
  providers: [DeliveryMethodService],
})
export class DeliveryMethodModule {}
