import { AutopartEntity } from 'src/autopart/autopart.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('manufacturer')
export class ManufacturerEntity {
  @Column()
  private adress: string;
  @Column()
  private email: string;
  @Column()
  private name: string;
  @Column()
  private phone: string;
  @OneToMany(() => AutopartEntity, (autopart) => autopart.manufacturer)
  autopart: AutopartEntity[];
  @PrimaryGeneratedColumn()
  id: number;
}
