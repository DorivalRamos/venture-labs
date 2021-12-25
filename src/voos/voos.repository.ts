import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';
import { Voo } from './entities/voo.entity';
import { CreateVooDto } from './dto/create-voo.dto';

@EntityRepository(Voo)
export class VooRepository extends Repository<Voo> {
  async createVoo(createVooDto: CreateVooDto): Promise<Voo> {
    const { companhia, origem, destino, valor, horaOrigem } = createVooDto;

    const voo = this.create();
    voo.companhia = companhia;
    voo.origem = origem;
    voo.destino = destino;
    voo.valor = valor;
    voo.horaOrigem = horaOrigem;

    try {
      await voo.save();
      return voo;
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
