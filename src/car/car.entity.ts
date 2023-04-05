import { AutopartEntity } from 'src/autopart/autopart.entity';
import { CarBrandEntity } from 'src/car-brand/car-brand.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('car')
export class CarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  year_manufacture: Date;

  @Column()
  body_type: string;

  @Column()
  engine_capacity: number;

  @Column()
  modification: string;

  @ManyToOne(() => CarBrandEntity, (carBrand) => carBrand.car)
  @JoinColumn({ name: 'fk_car_brand_id' })
  carBrand: CarBrandEntity;

  @OneToMany(() => AutopartEntity, (autopart) => autopart.car)
  autopart: AutopartEntity[];
}
