import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderList } from './orderList.entity';
import { Repository } from 'typeorm';


@Injectable()
export class OrderListService {
    constructor(
        @InjectRepository(OrderList)
        private orderListRepository: Repository<OrderList>,
    ) {}
    
    findAll(): Promise<OrderList[]> {
        return this.orderListRepository.find();
    }

    findOne(id: string): Promise<OrderList> {
        return this.orderListRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.orderListRepository.delete(id)
    }

    async saveOrderList(orderList: object): Promise<void> {
        await this.orderListRepository.save(orderList)
    }

    async updateOrderList(id: string, orderList: object): Promise<void> {
        await this.orderListRepository.update(id, orderList)

    }
    
}