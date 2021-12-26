import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

import { Companhia } from '../Models/companhia.entity';
import { CreateCompanhiaDto } from './dto/create-companhia.dto';

@EntityRepository(Companhia)
export class CompanhiaRepository extends Repository<Companhia> {
  async createCompanhia(
    createCompanhiaDto: CreateCompanhiaDto,
  ): Promise<Companhia> {
    const { nome } = createCompanhiaDto;

    const companhia = this.create();
    companhia.nome = nome;

    try {
      await companhia.save();
      return companhia;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Nome já está em uso!');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar o Companhia no banco de dados',
        );
      }
    }
  }
}
