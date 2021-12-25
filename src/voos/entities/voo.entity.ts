import { Companhia } from 'src/companhias/companhia.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Voo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Companhia, (Companhia) => Companhia.nome, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
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
