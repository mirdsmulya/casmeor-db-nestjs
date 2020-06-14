import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './accounts.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,
    ) {}
    
    findAll(): Promise<Account[]> {
        return this.accountRepository.find();
    }

    findOne(id: string): Promise<Account> {
        return this.accountRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.accountRepository.delete(id)
    }

    async saveAccount(account: object): Promise<void> {
        await this.accountRepository.save(account)
    }

    async updateAccount(id: string, account: object): Promise<void> {
        await this.accountRepository.update(id, account)

    }
    
}