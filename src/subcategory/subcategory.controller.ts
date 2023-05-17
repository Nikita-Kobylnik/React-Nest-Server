import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { SubcategoryEntity } from './subcategory.entity';
import { SubcategoryService } from './subcategory.service';
@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryServise: SubcategoryService) {}

  @Get('mainCategory/:id')
  private getAllByMainCategoryId(
    @Param('id') id: number,
  ): Promise<SubcategoryEntity[]> {
    return this.subcategoryServise.getAllByMainCategoryId(id);
  }

  @Get()
  private getAllSubcategories(): Promise<any> {
    return this.subcategoryServise.getAllSubcategories();
  }

  @Get(':id')
  private getAutopartsBySubcategory(@Param('id') id: number) {
    console.log('fd');
    return this.subcategoryServise.getAutopartsBySubcategory(id);
  }
}
