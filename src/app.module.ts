import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutopartEntity } from './autopart/autopart.entity';
import { AutopartModule } from './autopart/autopart.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Password123.',
      database: 'testbd',
      entities: [AutopartEntity],
    }),
    AutopartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
