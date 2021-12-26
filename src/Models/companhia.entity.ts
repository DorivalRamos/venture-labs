/* eslint-disable @typescript-eslint/no-unused-vars */
import { Voo } from './voo.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['nome'])
export class Companhia extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  nome: string;

  @OneToMany(() => Voo, (companhias) => Companhia, {
    cascade: true,
  })
  voos: Voo[];
}
