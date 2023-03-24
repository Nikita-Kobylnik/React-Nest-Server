import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { AutopartEntity } from './autopart.entity';
import { Repository, FindOneOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AutopartService {
  constructor(
    @InjectRepository(AutopartEntity)
    private readonly autopartRepositote: Repository<AutopartEntity>,
  ) {}
  async findAll(): Promise<AutopartEntity[]> {
    return await this.autopartRepositote.find();
  }

  async findOne(id_autopart: number): Promise<AutopartEntity> {
    const options: FindOneOptions<AutopartEntity> = {
      where: { id_autopart },
    };
    return this.autopartRepositote.findOne(options);
  }
}
