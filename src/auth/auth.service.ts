import { Injectable } from '@nestjs/common';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { UserService } from 'src/user/user.service';
import { Repository, FindOneOptions } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Body } from '@nestjs/common/decorators';
import { RegisterDto } from './dtos/register.dto';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new NotFoundException('Пользователя с таким email не существует');
    }

    const compPass = await bcrypt.compare(password, user.password);
    if (!compPass) {
      throw new BadRequestException('Неверный пароль');
    }

    const jwt_token = await this.jwtService.signAsync({ id: user.id }); // sign more data in future

    return {
      user,
      jwt_token,
    };
  }
  async register(@Body() body: RegisterDto) {
    const { email, password, ...data } = body;
    const user = await this.userService.findOne({ email });
    if (user) {
      throw new BadRequestException(
        `Пользователь с email "${email} уже существует"`,
      );
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await this.userService.create({
      ...data,
      email,
      password: hashedPass,
    });

    return newUser;
  }
}
