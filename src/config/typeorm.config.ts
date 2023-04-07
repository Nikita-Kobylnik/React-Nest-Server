import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getMySQLConfig } from './mysql.config';
import { AutopartEntity } from 'src/autopart/autopart.entity';
import { MainCategoryEntity } from 'src/mainCategory/mainCategory.entity';
import { SubcategoryEntity } from 'src/subcategory/subcategory.entity';
import { UserEntity } from 'src/user/user.entity';
import { SubcategoryAutopartEntity } from 'src/subcategoryAutopart/subcategoryAutopart.entity';
import { ManufacturerEntity } from 'src/manufacturer/manufacturer.entity';
import { CarEntity } from 'src/car/car.entity';
import { CarBrandEntity } from 'src/car-brand/car-brand.entity';
import { OrderEntity } from 'src/order/order.entity';
import { CartEntity } from 'src/cart/cart.entity';
import { DeliveryMethodEntity } from 'src/delivery-method/delivery-method.entity';

export const getTypeormConfig = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  return {
    ...getMySQLConfig(configService),
    type: 'mysql',
    // autoLoadEntities: true,
    entities: [
      AutopartEntity,
      MainCategoryEntity,
      SubcategoryEntity,
      UserEntity,
      SubcategoryAutopartEntity,
      ManufacturerEntity,
      CarEntity,
      CarBrandEntity,
      OrderEntity,
      CartEntity,
      DeliveryMethodEntity,
    ],
    // synchronize: true,
    // migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  };
};
