import { CarEntity } from 'src/car/car.entity';
import { CartEntity } from 'src/cart/cart.entity';
import { CommonEntity } from 'src/common/entities/common-entity';
import { ManufacturerEntity } from 'src/manufacturer/manufacturer.entity';
import { SubcategoryAutopartEntity } from 'src/subcategoryAutopart/subcategoryAutopart.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('autopart')
export class AutopartEntity extends CommonEntity {
  @Column()
  private image_path: string;
  @Column()
  amount: number;
  @ManyToOne(() => CarEntity, (car) => car.autopart)
  @JoinColumn({ name: 'fk_car_id' })
  car: CarEntity;
  @OneToMany(() => CartEntity, (cart) => cart.autopart)
  carts: CartEntity[];
  @Column()
  description: string;
  @ManyToOne(() => ManufacturerEntity, (manufacturer) => manufacturer.autopart)
  @JoinColumn({ name: 'fk_manufacturer_id' })
  manufacturer: ManufacturerEntity;
  @Column()
  name: string;

  @Column()
  price: number;
  @OneToMany(
    () => SubcategoryAutopartEntity,
    (subcategoryAutopart) => subcategoryAutopart.autopart,
  )
  subcategoryAutopart: SubcategoryAutopartEntity[];
}
