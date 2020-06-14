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
    
    findAll() {
        return "HIII"
    }
    
}