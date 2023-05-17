import { CarEntity } from 'src/car/car.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('car_brand')
export class CarBrandEntity {
  @Column()
  private name: string;
  @OneToMany(() => CarEntity, (car) => car.carBrand)
  car: CarEntity[];
  @PrimaryGeneratedColumn()
  id: number;
}
