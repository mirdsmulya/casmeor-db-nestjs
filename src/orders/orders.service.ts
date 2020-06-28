import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './orders.entity';
import { Repository } from 'typeorm';
import { OrderList } from 'src/orderList/orderList.entity';
import { OrderListService } from 'src/orderList/orderList.service';


@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
        private orderListService: OrderListService
    ) {}
    
    findAll(): Promise<Order[]> {
        return this.orderRepository.find();
    }

    findOne(id: string): Promise<Order> {
        return this.orderRepository.findOne(id, {relations: ["orderList"]});
    }

    async remove(id: string): Promise<void> {
        await this.orderRepository.delete(id)
    }

    async saveOrder(order: object, orderList: Array<OrderList>): Promise<void> {
        await this.orderRepository.save(order)
        await this.orderListService.saveOrderList(orderList)
    }

    async updateOrder(id: string, order: object, orderList: Array<OrderList>): Promise<void> {
        await this.orderRepository.delete(id)
        await this.orderRepository.save(order)
        await this.orderListService.saveOrderList(orderList)
    }

    async confirmPayment(id: string, order: object): Promise<void> {
        await this.orderRepository.update(id, order);
    }
    
}