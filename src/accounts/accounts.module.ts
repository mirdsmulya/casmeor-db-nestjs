import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './accounts.entity';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service'; 



@Module({
    imports: [TypeOrmModule.forFeature([Account])],
    controllers: [AccountsController],
    providers: [AccountsService]
})
export class AccountModule {}