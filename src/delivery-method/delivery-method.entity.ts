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
  @Column()
  private name: string;
  @PrimaryGeneratedColumn()
  id: number;
  @OneToMany(() => OrderEntity, (order) => order.delivery_method)
  orders: OrderEntity[];
}
