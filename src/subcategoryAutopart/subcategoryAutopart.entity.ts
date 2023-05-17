import { AutopartEntity } from 'src/autopart/autopart.entity';
import { SubcategoryEntity } from 'src/subcategory/subcategory.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('subcategory_autopart')
export class SubcategoryAutopartEntity {
  @PrimaryColumn()
  private autopart_id_autopart: number;
  @ManyToOne(() => AutopartEntity, (autopart) => autopart.subcategoryAutopart)
  @JoinColumn({ name: 'autopart_id_autopart' })
  autopart: AutopartEntity;
  @ManyToOne(
    () => SubcategoryEntity,
    (subcategory) => subcategory.subcategoryAutopart,
  )
  @JoinColumn({ name: 'subcategory_id_subcategory' })
  subcategoreis: SubcategoryEntity;
  @PrimaryColumn()
  subcategory_id_subcategory: number;
}
