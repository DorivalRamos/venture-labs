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
import { NotFoundError } from 'rxjs';

@Injectable()
export class VoosService {
  constructor(
    @InjectRepository(VooRepository)
    private VooRepository: VooRepository,
  ) {}
  async create(createVooDto: CreateVooDto) {
    return this.VooRepository.createVoo(createVooDto);
  }

  async findAll(): Promise<Voo> {
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
    const voo = this.VooRepository.assento(updateVooDto, id);

    if (!voo){
      throw new NotFoundException('não existe esse voo');
    }

    return voo;
  }
}
