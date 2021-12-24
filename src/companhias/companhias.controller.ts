import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { CompanhiasService } from './companhias.service';
import { CreateCompanhiaDto } from './dto/create-companhia.dto';

@Controller('companhias')
export class CompanhiasController {
  constructor(private readonly companhiasService: CompanhiasService) {}

  @Post()
  async create(@Body(ValidationPipe) createCompanhiaDto: CreateCompanhiaDto) {
    const companhia = await this.companhiasService.create(createCompanhiaDto);
    return { companhia, mesage: 'Companhia criada com sucesso' };
  }

  @Get()
  findAll() {
    return this.companhiasService.findAll();
  }
}
