import { Controller, Get, Post, Delete, Body, Param, Put, UseGuards } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderListService } from 'src/orderList/orderList.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('order')

export class OrdersController {
    constructor(private orderService: OrdersService, private orderListService : OrderListService) {}

    @Get()
    findAll() {
        return this.orderService.findAll()
    }

    @Get(':id')
    findOne(@Param() order) {
        return this.orderService.findOne(order.id)
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param() order) {
        return this.orderService.remove(order.id)
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createOrder(@Body() createOrderDto: CreateOrderDto) {
        return this.orderService.saveOrder(createOrderDto, createOrderDto.orderList)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param() id: string, @Body() updateOrderDto: UpdateOrderDto)  {
        
        if (updateOrderDto.paymentStatus == "PAID") {
            delete updateOrderDto.orderList;
            return this.orderService.confirmPayment(id, updateOrderDto)
        }
        const pureOrder = Object.assign({}, updateOrderDto);
        delete pureOrder.orderList;
        return this.orderService.updateOrder(id, pureOrder, updateOrderDto.orderList)
    }


}

