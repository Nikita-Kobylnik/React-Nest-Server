import { MainCategoryEntity } from 'src/mainCategory/mainCategory.entity';
import { SubcategoryAutopartEntity } from 'src/subcategoryAutopart/subcategoryAutopart.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('subcategory')
export class SubcategoryEntity {
  @Column()
  private name: string;
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(
    () => MainCategoryEntity,
    (mainCategory) => mainCategory.subcategoreis,
  )
  @JoinColumn({ name: 'fk_id_main_category' })
  mainCategory: MainCategoryEntity;

  @OneToMany(
    () => SubcategoryAutopartEntity,
    (subcategoryAutopart) => subcategoryAutopart.subcategoreis,
  )
  subcategoryAutopart: SubcategoryAutopartEntity[];
}
