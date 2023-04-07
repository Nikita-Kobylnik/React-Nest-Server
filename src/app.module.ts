import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AutopartEntity } from './autopart/autopart.entity';
import { AutopartModule } from './autopart/autopart.module';
import { MainCategoryEntity } from './mainCategory/mainCategory.entity';
import { MainCategoryModule } from './mainCategory/mainCategory.module';
import { SubcategoryEntity } from './subcategory/subcategory.entity';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { SubcategoryAutopartEntity } from './subcategoryAutopart/subcategoryAutopart.entity';
import { SubcategoryAutopartModule } from './subcategoryAutopart/subcategoryAutopart.module';
import { UserEntity } from './user/user.entity';
import { UserModule } from './user/user.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { ManufacturerEntity } from './manufacturer/manufacturer.entity';
import { CarModule } from './car/car.module';
import { CarBrandModule } from './car-brand/car-brand.module';
import { CarEntity } from './car/car.entity';
import { CarBrandEntity } from './car-brand/car-brand.entity';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { OrderEntity } from './order/order.entity';
import { CartEntity } from './cart/cart.entity';
import { DeliveryMethodModule } from './delivery-method/delivery-method.module';
import { DeliveryMethodEntity } from './delivery-method/delivery-method.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTypeormConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeormConfig,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'Password123.',
    //   database: 'mydb',
    //   entities: [
    //     AutopartEntity,
    //     MainCategoryEntity,
    //     SubcategoryEntity,
    //     UserEntity,
    //     SubcategoryAutopartEntity,
    //     ManufacturerEntity,
    //     CarEntity,
    //     CarBrandEntity,
    //     OrderEntity,
    //     CartEntity,
    //     DeliveryMethodEntity,
    //   ],
    // }),
    AutopartModule,
    MainCategoryModule,
    SubcategoryModule,
    UserModule,
    AuthModule,
    SubcategoryAutopartModule,
    ManufacturerModule,
    CarModule,
    CarBrandModule,
    OrderModule,
    CartModule,
    DeliveryMethodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
