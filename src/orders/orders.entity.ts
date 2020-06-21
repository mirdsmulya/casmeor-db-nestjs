

import { Entity, Column, PrimaryColumn } from 'typeorm';

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



}

