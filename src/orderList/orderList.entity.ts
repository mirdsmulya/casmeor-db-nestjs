

import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Order } from '../orders/orders.entity';

@Entity()
export class OrderList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderId: string;

  @Column()
  quantity: number;

  @Column()
  menuId: string

  @ManyToOne(type => Order, order => order.orderList , {onDelete: 'CASCADE'})
  order: Order;

}

