import { CarEntity } from 'src/car/car.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('car_brand')
export class CarBrandEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => CarEntity, (car) => car.carBrand)
  car: CarEntity[];
}
