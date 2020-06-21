import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './orders.entity';
import { Repository } from 'typeorm';


@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
    ) {}
    
    findAll(): Promise<Order[]> {
        return this.orderRepository.find();
    }

    findOne(id: string): Promise<Order> {
        return this.orderRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.orderRepository.delete(id)
    }

    async saveOrder(order: object): Promise<void> {
        await this.orderRepository.save(order)
    }

    async updateOrder(id: string, order: object): Promise<void> {
        await this.orderRepository.update(id, order)

    }
    
}