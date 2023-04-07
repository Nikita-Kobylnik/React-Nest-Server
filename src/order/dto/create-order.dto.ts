import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { OrderStatus } from '../enums/order-status.enum';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  fk_delivery_method_id: number;

  @IsNumber()
  @IsNotEmpty()
  fk_user_id: number;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsNumber()
  total_sum?: number;

  @IsOptional()
  @IsNotEmpty()
  order_status: OrderStatus;
}
