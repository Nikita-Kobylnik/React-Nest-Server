import { SubcategoryEntity } from 'src/subcategory/subcategory.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('main_category')
export class MainCategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => SubcategoryEntity, (subcategory) => subcategory.mainCategory)
  subcategoreis: SubcategoryEntity[];
}
