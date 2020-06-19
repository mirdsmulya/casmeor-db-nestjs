import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common'
import { AccountsService } from './accounts.service'
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto'


@Controller('account')

export class AccountsController {
    constructor(private accountService: AccountsService) {}

    @Get()
    findAll() {
        return this.accountService.findAll()
    }

    @Get(':id')
    findOne(@Param() account) {
        return this.accountService.findOne(account.id)
    }
    
    @Delete(':id')
    remove(@Param() account) {
        return this.accountService.remove(account.id)
    }

    @Post()
    create(@Body() createAccountDto: CreateAccountDto) {
        return this.accountService.saveAccount(createAccountDto)
    }

    @Put(':id')
    update(@Param() id: string, @Body() updateAccountDto: UpdateAccountDto)  {
        return this.accountService.updateAccount(id, updateAccountDto)
    }


}

