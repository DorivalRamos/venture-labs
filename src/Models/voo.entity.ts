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

  @Column({ nullable: false, type: 'varchar' })
  horaSaida: string;

  @Column({ nullable: false, type: 'decimal' })
  valor: string;

  @Column({ nullable: false, type: 'varchar', default: 'livre' })
  assento1: string;

  @Column({ nullable: false, type: 'varchar', default: 'livre' })
  assento2: string;

  @Column({ nullable: false, type: 'varchar', default: 'livre' })
  assento3: string;

  @Column({ nullable: false, type: 'varchar', default: 'livre' })
  assento4: string;

  @Column({ nullable: false, type: 'varchar', default: 'livre' })
  assento5: string;
}
