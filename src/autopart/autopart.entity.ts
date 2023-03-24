import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('autopart')
export class AutopartEntity {
  @PrimaryGeneratedColumn()
  id_autopart: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  amount: number;
}
