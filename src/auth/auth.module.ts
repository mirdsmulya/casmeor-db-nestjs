import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountModule } from 'src/accounts/accounts.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { AccountsService } from 'src/accounts/accounts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/accounts/accounts.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
      TypeOrmModule.forFeature([Account]), 
      AccountModule, 
      PassportModule,
      JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '1000s' }
      })
    
    ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, AccountsService, JwtStrategy]
})
export class AuthModule {}