import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './orders.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service'; 



@Module({
    imports: [TypeOrmModule.forFeature([Order])],
    controllers: [OrdersController],
    providers: [OrdersService]
})
export class OrderModule {}