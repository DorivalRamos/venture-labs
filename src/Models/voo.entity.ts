import { Companhia } from 'src/Models/companhia.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Voo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(() => Companhia, (voos) => Voo, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    eager: true,
  })
  companhia: Companhia;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  origem: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  destino: string;

  @Column({ nullable: false, type: 'time' })
  horaOrigem: string;

  @Column({ nullable: false, type: 'decimal' })
  valor: string;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento1: string;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento2: string;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento3: string;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento4: string;

  @Column({ nullable: false, type: 'boolean', default: true })
  assento5: string;
}
