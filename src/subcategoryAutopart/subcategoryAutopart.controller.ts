import { Controller, Get, Param } from '@nestjs/common';
import { SubcategoryAutopartService } from './subcategoryAutopart.service';
@Controller('all')
export class SubcategoryAutopartController {
  constructor(
    private readonly subcategoryAutopartService: SubcategoryAutopartService,
  ) {}
}
