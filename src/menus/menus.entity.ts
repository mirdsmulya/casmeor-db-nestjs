

import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Menu {
  @PrimaryColumn()
  id: string;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  quantity: number;


}

