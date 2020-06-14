

import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  nip: string;

  @Column()
  role: string;

  @Column()
  password: string;
}


// class none {}