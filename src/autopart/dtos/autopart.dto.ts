import {
  IsNotEmpty,
  IsEmail,
  Length,
  IsString,
  IsNumber,
} from 'class-validator';

export class AutopartDto {
  @IsNotEmpty()
  @IsNumber()
  fk_id_manufacturer: number;

  @IsNotEmpty()
  @IsNumber()
  fk_car_id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
