import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderEntity } from './order.entity';
import { AuthGuard } from 'src/user/guards/auth.guard';
import { AdminGuard } from 'src/user/guards/admin.guard';
// import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  private create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  private findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  private findOne(@Param('id') id: number) {
    return this.orderService.findOne(id);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  private remove(@Param('id') id: number) {
    return this.orderService.remove(id);
  }

  // @UseGuards(AdminGuard)
  @Get('user/:id')
  private getAllByUserId(@Param('id') id: number): Promise<OrderEntity[]> {
    return this.orderService.getAllByUserId(id);
  }
}
