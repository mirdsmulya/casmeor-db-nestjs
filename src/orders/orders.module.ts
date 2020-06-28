import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './orders.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service'; 
import { OrderListService } from 'src/orderList/orderList.service';
import { OrderList } from 'src/orderList/orderList.entity';
import { OrderListModule } from 'src/orderList/orderList.module';



@Module({
    imports: [TypeOrmModule.forFeature([Order, OrderList]), OrderListModule],
    controllers: [OrdersController],
    providers: [OrdersService, OrderListService]
})
export class OrderModule {}