import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/user/guards/auth.guard';
import { MainCategoryEntity } from './mainCategory.entity';
import { MainCategoryService } from './mainCategory.service';
@Controller('mainCategory')
export class MainCategoryController {
  constructor(private readonly mainCategoryServise: MainCategoryService) {}
  // @UseGuards(AuthGuard)
  @Get()
  private findAll(): Promise<MainCategoryEntity[]> {
    return this.mainCategoryServise.findAll();
  }

  @Get('/subcategoreis')
  private getAllWithSubcategories() {
    return this.mainCategoryServise.getAllWithSubcategories();
  }
}
