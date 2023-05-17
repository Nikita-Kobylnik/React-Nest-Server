import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(
    @Body() body: any,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { user, jwt_token } = await this.authService.login(
      body.email,
      body.password,
    );
    response.cookie('user', jwt_token, { httpOnly: true });
    return user;
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('user');

    return {
      message: 'Выход выполнен успешно',
    };
  }

  @Post('register')
  async register(
    @Body() body: RegisterDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { newUser, jwt_token } = await this.authService.register(body);
    response.cookie('user', jwt_token, { httpOnly: true });
    return newUser;
  }

  @Get('user')
  // @Serialize(UserDto)
  async user(@Req() request: Request) {
    if (!request.currentUser) {
      throw new BadRequestException('Юзер из нот логин');
    }

    return this.authService.findOne(request.currentUser.id);
  }
}
