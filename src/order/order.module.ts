import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { UserEntity } from 'src/user/user.entity';
import { DeliveryMethodEntity } from 'src/delivery-method/delivery-method.entity';
import { UserService } from 'src/user/user.service';
import { DeliveryMethodService } from 'src/delivery-method/delivery-method.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, UserEntity, DeliveryMethodEntity]),
  ],
  controllers: [OrderController],
  providers: [OrderService, UserService, DeliveryMethodService],
})
export class OrderModule {}
