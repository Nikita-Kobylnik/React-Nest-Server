import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class AutopartDto {
  private image_path: string;
  @IsNotEmpty()
  @IsNumber()
  amount: number;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  @IsNumber()
  fk_car_id: number;
  @IsNotEmpty()
  @IsNumber()
  fk_id_manufacturer: number;
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
