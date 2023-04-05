import { AutopartEntity } from 'src/autopart/autopart.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('manufacturer')
export class ManufacturerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  adress: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @OneToMany(() => AutopartEntity, (autopart) => autopart.manufacturer)
  autopart: AutopartEntity[];
}
