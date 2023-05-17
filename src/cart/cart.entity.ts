import { AutopartEntity } from 'src/autopart/autopart.entity';
import { OrderEntity } from 'src/order/order.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('cart')
export class CartEntity {
  @Column()
  amount: number;
  @ManyToOne(() => AutopartEntity, (autopart) => autopart.carts)
  @JoinColumn({ name: 'autopart_id' })
  autopart: AutopartEntity;
  @PrimaryColumn()
  autopart_id: number;
  @ManyToOne(() => OrderEntity, (order) => order.carts)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;
  @PrimaryColumn()
  order_id: number;
}
