import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCartDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;
  @IsNotEmpty()
  @IsNumber()
  autopart_id: number;

  @IsNotEmpty()
  @IsNumber()
  order_id: number;
}
