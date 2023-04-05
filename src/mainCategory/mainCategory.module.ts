import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainCategoryController } from './mainCategory.controller';
import { MainCategoryEntity } from './mainCategory.entity';
import { MainCategoryService } from './mainCategory.service';

@Module({
  imports: [TypeOrmModule.forFeature([MainCategoryEntity])],
  controllers: [MainCategoryController],
  providers: [MainCategoryService],
})
export class MainCategoryModule {}
