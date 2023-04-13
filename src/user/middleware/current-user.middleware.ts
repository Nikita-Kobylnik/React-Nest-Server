import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';
// import { USER_IN_COOKIE } from 'src/common/constants';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/user.entity';

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserEntity;
    }
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const jwt = req.cookies['user'];

      if (!jwt) {
        // Если токен отсутствует, пропустить middleware и перейти к следующему обработчику
        next();
        return;
      }

      const data = await this.jwtService.verifyAsync(jwt);
      if (data) {
        const user = await this.userService.findOne({ id: data.id });
        req.currentUser = user;
        next();
      } else {
        next();
      }
    } catch (error) {
      next(error);
    }
  }
}
