import { Voo } from './voo.entity';
import { BaseEntity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

export class Assento extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Voo)
  voo: Voo;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento1: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento2: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento3: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento4: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento5: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento6: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento7: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento8: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento9: boolean;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento10: boolean;
}
