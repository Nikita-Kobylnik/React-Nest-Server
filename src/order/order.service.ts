import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderEntity } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';
import { DeliveryMethodEntity } from 'src/delivery-method/delivery-method.entity';
import { OrderStatus } from './enums/order-status.enum';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(DeliveryMethodEntity)
    private readonly deliveryMethodRepository: Repository<DeliveryMethodEntity>,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const user = await this.userRepository.findOne({
      where: { id: createOrderDto.fk_user_id },
    });

    if (!user) {
      throw new NotFoundException(
        `User with ID ${createOrderDto.fk_user_id} not found`,
      );
    }

    const delivery_method = await this.deliveryMethodRepository.findOne({
      where: { id: createOrderDto.fk_delivery_method_id },
    });

    if (!delivery_method) {
      throw new NotFoundException(
        `Delivery method with ID ${createOrderDto.fk_delivery_method_id} not found`,
      );
    }
    const order = new OrderEntity();
    order.delivery_method = delivery_method;
    order.user = user;
    order.address = createOrderDto.address;
    order.order_status =
      createOrderDto.order_status ?? OrderStatus.IN_PROCESSING;
    return this.orderRepository.save(order);
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return this.orderRepository.findOne({
      where: { id },
    });
  }

  async getAllByUserId(id: number): Promise<OrderEntity[]> {
    return await this.orderRepository.find({
      where: { user: { id: id } },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
