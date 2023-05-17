import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository, FindOneOptions } from 'typeorm';
import { UserEntity } from './user.entity';
@Injectable()
export class UserService extends AbstractService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }

  async getUserByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async getUserById(id: number): Promise<UserEntity> {
    const options: FindOneOptions<UserEntity> = {
      where: { id },
    };
    let user = this.userRepository.findOne(options);
    return user;
  }
}
