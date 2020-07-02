import { Controller, Get, Post, Delete, Body, Param, Put, UseGuards } from '@nestjs/common'
import { AccountsService } from './accounts.service'
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('account')

export class AccountsController {
    constructor(private accountService: AccountsService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.accountService.findAll()
    }

    @UseGuards(JwtAuthGuard)
    @Get(':username')
    findOne(@Param() account) {
        return this.accountService.findOne(account.username)
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

