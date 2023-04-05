import { Controller, Param, Get } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UserEntity> {
    let user = this.userService.getUserById(id);
    return user;
  }

  @Get(':email')
  async getUserByEmail(@Param('email') email: string): Promise<UserEntity> {
    let user = this.userService.getUserByEmail(email);
    return user;
  }
}
