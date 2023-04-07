import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderEntity } from './order.entity';
// import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.orderService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.orderService.remove(id);
  }

  @Get('user/:id')
  getAllByUserId(@Param('id') id: number): Promise<OrderEntity[]> {
    return this.orderService.getAllByUserId(id);
  }
}
