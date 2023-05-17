import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { OrderStatus } from '../enums/order-status.enum';

export class CreateOrderDto {
  @IsOptional()
  @IsNumber()
  private total_sum?: number;
  @IsString()
  @IsNotEmpty()
  address: string;
  @IsNumber()
  @IsNotEmpty()
  fk_delivery_method_id: number;

  @IsNumber()
  @IsNotEmpty()
  fk_user_id: number;
  @IsOptional()
  @IsNotEmpty()
  order_status: OrderStatus;
}
