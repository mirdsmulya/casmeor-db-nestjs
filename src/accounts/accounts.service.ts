import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './accounts.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,
    ) {}
    
    findAll(): Promise<Account[]> {
        return this.accountRepository.find();
    }

    findOne(username: string): Promise<Account> {
        return this.accountRepository.findOne({username});
    }

    async remove(id: string): Promise<void> {
        await this.accountRepository.delete(id)
    }

    async saveAccount(account: Account): Promise<void> {
        await bcrypt.hash(account.password, 10, (err, hash) => {
            account['password'] = hash
            this.accountRepository.save(account)          
        });
    }

    async updateAccount(id: string, account: object): Promise<void> {
        await this.accountRepository.update(id, account)

    }
    
}