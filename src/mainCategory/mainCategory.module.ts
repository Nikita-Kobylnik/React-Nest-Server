import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainCategoryController } from './mainCategory.controller';
import { MainCategoryEntity } from './mainCategory.entity';
import { MainCategoryService } from './mainCategory.service';
import { SubcategoryEntity } from 'src/subcategory/subcategory.entity';
import { SubcategoryService } from 'src/subcategory/subcategory.service';

@Module({
  imports: [TypeOrmModule.forFeature([MainCategoryEntity, SubcategoryEntity])],
  controllers: [MainCategoryController],
  providers: [MainCategoryService, SubcategoryService],
})
export class MainCategoryModule {}
