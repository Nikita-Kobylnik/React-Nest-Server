import { Injectable } from '@nestjs/common';
import {
  DeepPartial,
  FindOptionsOrder,
  FindOptionsWhere,
  In,
  Repository,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { CommonEntity } from './entities/common-entity';
import { PaginatedResult } from './interfaces/paginated-result.interface';

@Injectable()
export abstract class AbstractService<Entity extends CommonEntity> {
  protected constructor(protected readonly repository: Repository<Entity>) {}

  async all(relations: string[] = []): Promise<Entity[]> {
    return await this.repository.find({ relations });
  }

  async create(
    data: DeepPartial<Entity>,
  ): Promise<DeepPartial<Entity> & Entity> {
    return this.repository.save(data);
  }

  async delete(id: number): Promise<any> {
    await this.repository.delete(id);
    return {
      message: `Successfully deleted instance with id: '${id}'`,
    };
  }

  async findInRangeId(
    ids: number[],
    orderBy?: FindOptionsOrder<Entity>,
  ): Promise<{ entities: Entity[]; isRangeCorrect: boolean }> {
    const entities = await this.findMany({ id: In(ids) as any }, [], orderBy);
    return {
      entities,
      isRangeCorrect: entities.length === ids.length,
    };
  }

  async findMany(
    condition: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
    relations: string[] = [],
    orderBy?: FindOptionsOrder<Entity>,
  ): Promise<Entity[]> {
    return await this.repository.find({
      where: condition,
      order: orderBy,
      relations,
    });
  }

  async findOne(
    condition: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
    relations: string[] = [],
  ): Promise<Entity> {
    return this.repository.findOne({ relations, where: condition });
  }

  async paginate(
    page = 1,
    relations: string[] = [],
  ): Promise<PaginatedResult<Entity>> {
    const take = 8;

    const [data, total] = await this.repository.findAndCount({
      take,
      skip: (page - 1) * take,
      relations,
    });

    return {
      data,
      meta: {
        total,
        page,
        lastPage: Math.ceil(total / take),
      },
    };
  }

  async update(
    id: number,
    data: QueryDeepPartialEntity<Entity>,
  ): Promise<UpdateResult> {
    return await this.repository.update(id, data);
  }
}
