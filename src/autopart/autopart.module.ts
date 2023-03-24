import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutopartController } from './autopart.controller';
import { AutopartEntity } from './autopart.entity';
import { AutopartService } from './autopart.service';

@Module({
  imports: [TypeOrmModule.forFeature([AutopartEntity])],
  controllers: [AutopartController],
  providers: [AutopartService],
})
export class AutopartModule {}
