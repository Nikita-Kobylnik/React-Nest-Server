import { Controller, Param, Get, UseGuards } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('user/:id')
  async getUserById(@Param('id') id: number): Promise<UserEntity> {
    let user = this.userService.getUserById(id);
    return user;
  }

  @Get('user/:email')
  async getUserByEmail(@Param('email') email: string): Promise<UserEntity> {
    let user = this.userService.getUserByEmail(email);
    return user;
  }

  // @UseGuards(AdminGuard)
  @Get('users')
  async getAll(): Promise<UserEntity[]> {
    return this.userService.all();
  }
}
