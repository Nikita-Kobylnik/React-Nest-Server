import { OrderEntity } from 'src/order/order.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('delivery_method')
export class DeliveryMethodEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => OrderEntity, (order) => order.delivery_method)
  orders: OrderEntity[];
}
