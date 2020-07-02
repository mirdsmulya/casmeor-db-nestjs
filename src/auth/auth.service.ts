import { Injectable } from '@nestjs/common';
import { AccountsService } from 'src/accounts/accounts.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
      private accountService: AccountsService,
      private jwtService: JwtService    
      ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.accountService.findOne(username);    
    if (user && bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;      
      return result;
    }
    return null;
  }

  async login(userDetail: any) {
      const user = await this.validateUser(userDetail.username, userDetail.password)
      const payload = {name: user.name, sub: user.id}
      return {
          access_token: this.jwtService.sign(payload)
      }
  }
}