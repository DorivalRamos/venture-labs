import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVooDto } from './dto/create-voo.dto';
import { UpdateVooDto } from './dto/update-voo.dto';
import { Voo } from '../Models/voo.entity';
import { VooRepository } from './voos.repository';

@Injectable()
export class VoosService {
  constructor(
    @InjectRepository(VooRepository)
    private VooRepository: VooRepository,
  ) {}
  async create(createVooDto: CreateVooDto) {
    return this.VooRepository.createVoo(createVooDto);
  }

  async findAll() {
    return this.VooRepository.FindAll();
  }

  async findOne(id: string): Promise<Voo> {
    const voo = await this.VooRepository.findOne(id, {
      relations: ['companhia'],
    });

    if (!voo) throw new NotFoundException('Voo não encontrado');

    return voo;
  }

  async updateVoo(updateVooDto: UpdateVooDto, id: string): Promise<Voo> {
    const voo = await this.findOne(id);
    const { horaOrigem } = voo;

    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const hora = h + ':' + m;
    const horas = parseFloat(horaOrigem) - parseFloat(hora);
    console.log(horaOrigem, hora, horas);

    /* if ((horas) <= 1) {
      throw new InternalServerErrorException(
        'Horario minimo de compra já ultrapassado',
      );
    } */

    /* const {
      assento1,
      assento2,
      assento3,
      assento4,
      assento5,
      assento6,
      assento7,
      assento8,
      assento9,
      assento10,
    } = updateVooDto;
 */
    try {
      await voo.save();
      return voo;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao salvar os dados no banco de dados',
      );
    }
  }
}
