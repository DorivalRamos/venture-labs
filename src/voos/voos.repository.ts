import { EntityRepository, Repository } from 'typeorm';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Voo } from '../Models/voo.entity';
import { CreateVooDto } from './dto/create-voo.dto';
import { UpdateVooDto } from './dto/update-voo.dto';

@EntityRepository(Voo)
export class VooRepository extends Repository<Voo> {
  async createVoo(createVooDto: CreateVooDto): Promise<Voo> {
    const { companhia, origem, destino, valor, horaSaida } = createVooDto;
    const voo = this.create();

    /* const today = new Date();
    const y = today.getFullYear();
    const m = today.getMonth();
    const d = today.getDate();
    const dataCompleta = y + '-' + m + '-' + d;
    const diaCompleto = dataCompleta + 'T' + horaOrigem + '.000Z'; */

    voo.companhia = companhia;
    voo.origem = origem;
    voo.destino = destino;
    voo.valor = valor;
    voo.horaSaida = horaSaida;
    console.log(horaSaida);
    try {
      await voo.save();
      return voo;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao salvar o Voo no banco de dados',
      );
    }
  }

  async assento(UpdateVooDto: UpdateVooDto, id: string): Promise<Voo> {
    const bdAssento = await this.findOne(id);
    const { assento1, assento2, assento3, assento4, assento5 } = UpdateVooDto;

    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    const dataCompleta = h + ':' + m + ':' + s;

    /* const seconds = new Date(bdAssento.horaOrigem).getTime() / 1000; */
    const tempo = new Date();
    const tempo2 = tempo.getTime() / 1000;
    console.log('aqui ' + bdAssento.horaSaida, dataCompleta);

    if (assento1 == undefined) {
    } else if (bdAssento.assento1 == assento1) {
      throw new NotFoundException('Assento 1 já comprado');
    } else {
      bdAssento.assento1 = 'ocupado';
    }

    if (assento2 == undefined) {
    } else if (bdAssento.assento2 == assento2) {
      throw new NotFoundException('Assento 2 já comprado');
    } else {
      bdAssento.assento2 = 'ocupado';
    }

    if (assento3 == undefined) {
    } else if (bdAssento.assento3 == assento3) {
      throw new NotFoundException('Assento 2 já comprado');
    } else {
      bdAssento.assento3 = 'ocupado';
    }

    if (assento4 == undefined) {
    } else if (bdAssento.assento4 == assento4) {
      throw new NotFoundException('Assento 2 já comprado');
    } else {
      bdAssento.assento4 = 'ocupado';
    }

    if (assento5 == undefined) {
    } else if (bdAssento.assento5 == assento5) {
      throw new NotFoundException('Assento 2 já comprado');
    } else {
      bdAssento.assento5 = 'ocupado';
    }

    try {
      await bdAssento.save();
      return bdAssento;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao salvar o Voo no banco de dados',
      );
    }
  }

  async FindAll(): Promise<any> {
    const query = this.createQueryBuilder('voo');
    query.leftJoinAndSelect('voo.companhia', 'companhia');
    return await query.getMany();
  }
}
