import { AbstractService } from 'src/common/abstract.service';
import { CommonEntity } from 'src/common/entities/common-entity';
import { OrderEntity } from 'src/order/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('user')
export class UserEntity extends CommonEntity {
  @Column()
  private lastname: string;
  @Column()
  private name: string;
  @Column()
  private phone: string;
  @Column()
  email: string;
  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: OrderEntity[];
  @Column()
  password: string;
  @Column()
  role: string;
}
