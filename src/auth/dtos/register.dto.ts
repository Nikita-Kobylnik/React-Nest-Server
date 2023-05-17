import { IsNotEmpty, IsEmail, Length } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  private lastname: string;
  @IsNotEmpty()
  private name: string;
  @IsNotEmpty()
  private phone: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
