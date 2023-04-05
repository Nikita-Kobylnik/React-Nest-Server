import { CommonEntity } from 'src/common/entities/common-entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { OrderStatus } from './enums/order-status.enum';
import { UserEntity } from 'src/user/user.entity';
import { CartEntity } from 'src/cart/cart.entity';

@Entity('order')
export class OrderEntity extends CommonEntity {
  @Column()
  address: string;

  @Column()
  total_sum: number;

  @Column()
  order_status: OrderStatus.IN_PROCESSING;

  @ManyToOne(() => UserEntity, (user) => user.orders)
  @JoinColumn({ name: 'fk_user_id' })
  user: UserEntity;

  @OneToMany(() => CartEntity, (cart) => cart.orders)
  orders: CartEntity[];
}
