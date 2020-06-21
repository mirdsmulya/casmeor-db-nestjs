import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm';
import { AccountModule } from './accounts/accounts.module';
import { MenuModule } from './menus/menus.module'
import { OrderModule } from './orders/orders.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AccountModule, MenuModule, OrderModule],
  // controllers: [ AppController, AccountsController],
  // providers: [AppService, AccountsService],
})
export class AppModule {
  constructor( private connection: Connection) {}
}
