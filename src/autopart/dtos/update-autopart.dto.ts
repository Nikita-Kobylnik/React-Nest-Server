import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAutopartDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
