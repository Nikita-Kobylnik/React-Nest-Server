import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubcategoryAutopartController } from './subcategoryAutopart.controller';
import { SubcategoryAutopartEntity } from './subcategoryAutopart.entity';
import { SubcategoryAutopartService } from './subcategoryAutopart.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubcategoryAutopartEntity])],
  controllers: [SubcategoryAutopartController],
  providers: [SubcategoryAutopartService],
})
export class SubcategoryAutopartModule {}
