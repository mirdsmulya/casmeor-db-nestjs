import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm';
import { AccountModule } from './accounts/accounts.module';
import { MenuModule } from './menus/menus.module'
import { OrderModule } from './orders/orders.module';
import { OrderListModule } from './orderList/orderList.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AccountModule, MenuModule, OrderModule, OrderListModule, AuthModule],
  controllers: [ AppController],
  providers: [AppService],
})
export class AppModule {
  constructor( private connection: Connection) {}
}
