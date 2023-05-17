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
  @Column()
  private body_type: string;
  @Column()
  private engine_capacity: number;
  @Column()
  private model: string;
  @Column()
  private modification: string;
  @Column()
  private year_manufacture: Date;
  @OneToMany(() => AutopartEntity, (autopart) => autopart.car)
  autopart: AutopartEntity[];
  @ManyToOne(() => CarBrandEntity, (carBrand) => carBrand.car)
  @JoinColumn({ name: 'fk_car_brand_id' })
  carBrand: CarBrandEntity;
  @PrimaryGeneratedColumn()
  id: number;
}
