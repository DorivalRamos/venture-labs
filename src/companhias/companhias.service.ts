import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Companhia } from '../Models/companhia.entity';
import { CompanhiaRepository } from './companhias.repository';
import { CreateCompanhiaDto } from './dto/create-companhia.dto';

@Injectable()
export class CompanhiasService {
  constructor(
    @InjectRepository(CompanhiaRepository)
    private companhiaRepository: CompanhiaRepository,
  ) {}

  async create(createCompanhiaDto: CreateCompanhiaDto): Promise<Companhia> {
    return this.companhiaRepository.createCompanhia(createCompanhiaDto);
  }

  findAll() {
    return this.companhiaRepository.find();
  }
}
