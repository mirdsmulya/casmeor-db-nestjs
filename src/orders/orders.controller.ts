import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto'


@Controller('order')

export class OrdersController {
    constructor(private orderService: OrdersService) {}

    @Get()
    findAll() {
        return this.orderService.findAll()
    }

    @Get(':id')
    findOne(@Param() order) {
        return this.orderService.findOne(order.id)
    }
    
    @Delete(':id')
    remove(@Param() order) {
        return this.orderService.remove(order.id)
    }

    @Post()
    create(@Body() createOrderDto: CreateOrderDto) {
        return this.orderService.saveOrder(createOrderDto)
    }

    @Put(':id')
    update(@Param() id: string, @Body() updateOrderDto: UpdateOrderDto)  {
        return this.orderService.updateOrder(id, updateOrderDto)
    }


}

