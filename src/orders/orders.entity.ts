

import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';
import { OrderList } from '../orderList/orderList.entity';

@Entity()
    export class Order {
    @PrimaryColumn()
    id: string;

    @Column()
    cashierIdentity: string;

    @Column()
    name: string;

    @Column()
    currentDate: string;

    @Column()
    paymentStatus: string;

    @Column()
    totalAmount: number;

    @Column()
    orderNumber: number;

    @Column()
    tableNumber: number;

    @OneToMany(type => OrderList, orderList => orderList.order)
    @JoinColumn()
    orderList: OrderList[];

    }

