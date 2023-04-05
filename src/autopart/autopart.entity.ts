import { CarEntity } from 'src/car/car.entity';
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
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  amount: number;

  @OneToMany(
    () => SubcategoryAutopartEntity,
    (subcategoryAutopart) => subcategoryAutopart.autopart,
  )
  subcategoryAutopart: SubcategoryAutopartEntity[];

  @ManyToOne(() => ManufacturerEntity, (manufacturer) => manufacturer.autopart)
  @JoinColumn({ name: 'fk_manufacturer_id' })
  manufacturer: ManufacturerEntity;

  @ManyToOne(() => CarEntity, (car) => car.autopart)
  @JoinColumn({ name: 'fk_car_id' })
  car: CarEntity;
}
