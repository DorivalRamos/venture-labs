import { Voo } from 'src/voos/entities/voo.entity';
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

  @JoinColumn({ name: 'voo_id' })
  @OneToMany(() => Voo, (Voos) => Voos.companhia, {
    cascade: true,
  })
  Voos: Voo[];
}
