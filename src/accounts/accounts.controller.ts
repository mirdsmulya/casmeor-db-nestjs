import { Controller, Get } from '@nestjs/common'
import { AccountsService } from './accounts.service'
import { Account } from './interfaces/account.interface';


@Controller('accounts')

export class AccountsController {
    constructor(private accountService: AccountsService) {}

    @Get()
    // findAll(): Promise<Account[]> {
    findAll() {
        return this.accountService.findAll()
    }


}

