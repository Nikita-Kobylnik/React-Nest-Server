import { AutopartEntity } from 'src/autopart/autopart.entity';
import { OrderEntity } from 'src/order/order.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('cart')
export class CartEntity {
  @PrimaryColumn()
  autopart_id: number;

  @PrimaryColumn()
  order_id: number;

  @Column()
  amount: number;

  @ManyToOne(() => OrderEntity, (order) => order.orders)
  @JoinColumn({ name: 'order_id' })
  orders: OrderEntity;

  @ManyToOne(() => AutopartEntity, (autopart) => autopart)
  @JoinColumn({ name: 'autopart_id' })
  autoparts: AutopartEntity;
}
