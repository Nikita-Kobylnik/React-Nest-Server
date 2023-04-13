import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UserRoles } from '../enums/user-role.enum';

@Injectable()
export class AdminGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request: Request = context.switchToHttp().getRequest();
    const user = request.currentUser;
    return user?.role === UserRoles.ADMIN;
  }
}
