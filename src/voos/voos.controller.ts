import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { VoosService } from './voos.service';
import { CreateVooDto } from './dto/create-voo.dto';
import { UpdateVooDto } from './dto/update-voo.dto';
import { ReturnVooDto } from 'src/companhias/dto/return-voo.dto';

@Controller('voos')
export class VoosController {
  constructor(private readonly voosService: VoosService) {}

  @Post()
  async create(@Body(ValidationPipe) createVooDto: CreateVooDto) {
    const voos = await this.voosService.create(createVooDto);
    return { voos, message: 'Voo Criado Com sucesso!' };
  }

  @Get()
  findAll() {
    return this.voosService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<ReturnVooDto> {
    const voo = await this.voosService.findOne(id);
    return {
      voo,
      message: 'Voo encontrado',
    };
  }
  @Patch('/:id')
  async updateVoo(
    @Body(ValidationPipe) updateVooDto: UpdateVooDto,
    @Param('id') id: string,
  ) {
    return this.voosService.updateVoo(updateVooDto, id);
  }
}
