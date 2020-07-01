import { Injectable } from '@nestjs/common';
import { AccountsService } from 'src/accounts/accounts.service';

@Injectable()
export class AuthService {
  constructor(
      private accountService: AccountsService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.accountService.findOne(username);    
    if (user && user.password === pass) {
      const { password, ...result } = user;      
      return result;
    }
    return null;
  }
}