import { CommonEntity } from 'src/common/entities/common-entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { OrderStatus } from './enums/order-status.enum';
import { UserEntity } from 'src/user/user.entity';
import { CartEntity } from 'src/cart/cart.entity';
import { DeliveryMethodEntity } from 'src/delivery-method/delivery-method.entity';

@Entity('order')
export class OrderEntity extends CommonEntity {
  @Column({ nullable: true })
  private total_sum: number;
  @Column()
  address: string;
  @OneToMany(() => CartEntity, (cart) => cart.order)
  carts: CartEntity[];
  @ManyToOne(
    () => DeliveryMethodEntity,
    (delivery_method) => delivery_method.orders,
  )
  @JoinColumn({ name: 'fk_delivery_method_id' })
  delivery_method: DeliveryMethodEntity;
  @Column({ enum: OrderStatus, default: OrderStatus.IN_PROCESSING })
  order_status: OrderStatus;

  @ManyToOne(() => UserEntity, (user) => user.orders)
  @JoinColumn({ name: 'fk_user_id' })
  user: UserEntity;
}
