import { SubcategoryEntity } from 'src/subcategory/subcategory.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('main_category')
export class MainCategoryEntity {
  @Column()
  private name: string;
  @PrimaryGeneratedColumn()
  id: number;
  @OneToMany(() => SubcategoryEntity, (subcategory) => subcategory.mainCategory)
  subcategoreis: SubcategoryEntity[];
}
