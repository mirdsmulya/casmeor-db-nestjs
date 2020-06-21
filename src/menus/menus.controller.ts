import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common'
import { MenusService } from './menus.service'
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto'


@Controller('menu')

export class MenusController {
    constructor(private menuService: MenusService) {}

    @Get()
    findAll() {
        return this.menuService.findAll()
    }

    @Get(':id')
    findOne(@Param() menu) {
        return this.menuService.findOne(menu.id)
    }
    
    @Delete(':id')
    remove(@Param() menu) {
        return this.menuService.remove(menu.id)
    }

    @Post()
    create(@Body() createMenuDto: CreateMenuDto) {
        return this.menuService.saveMenu(createMenuDto)
    }

    @Put(':id')
    update(@Param() id: string, @Body() updateMenuDto: UpdateMenuDto)  {
        return this.menuService.updateMenu(id, updateMenuDto)
    }


}

