import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsController } from './accounts/accounts.controller';
import { AccountsService } from './accounts/accounts.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm';
import { AccountModule } from './accounts/accounts.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AccountModule],
  // controllers: [ AppController, AccountsController],
  // providers: [AppService, AccountsService],
})
export class AppModule {
  constructor( private connection: Connection) {}
}
