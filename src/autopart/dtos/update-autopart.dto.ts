import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAutopartDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  amount: number;
  @IsOptional()
  @IsNotEmpty()
  description: string;
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
