import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeliveryMethodService } from './delivery-method.service';
import { CreateDeliveryMethodDto } from './dto/create-delivery-method.dto';
// import { UpdateDeliveryMethodDto } from './dto/update-delivery-method.dto';

@Controller('delivery-method')
export class DeliveryMethodController {
  constructor(private readonly deliveryMethodService: DeliveryMethodService) {}

  @Post()
  private create(@Body() createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethodService.create(createDeliveryMethodDto);
  }

  @Get()
  private findAll() {
    return this.deliveryMethodService.findAll();
  }

  @Get(':id')
  private findOne(@Param('id') id: string) {
    return this.deliveryMethodService.findOne(+id);
  }

  @Delete(':id')
  private remove(@Param('id') id: string) {
    return this.deliveryMethodService.remove(+id);
  }
}
