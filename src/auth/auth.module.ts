import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountModule } from 'src/accounts/accounts.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { AccountsService } from 'src/accounts/accounts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/accounts/accounts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account]), AccountModule, PassportModule,],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, AccountsService]
})
export class AuthModule {}