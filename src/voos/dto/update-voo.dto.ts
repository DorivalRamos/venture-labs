import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { Companhia } from 'src/Models/companhia.entity';
import { CreateVooDto } from './create-voo.dto';

export class UpdateVooDto extends PartialType(CreateVooDto) {
  @IsOptional()
  companhia: Companhia;

  @IsOptional()
  origem: string;

  @IsOptional()
  destino: string;

  @IsOptional()
  valor: string;

  @IsOptional()
  horaSaida: string;

  @IsOptional()
  assento1: string;

  @IsOptional()
  assento2: string;

  @IsOptional()
  assento3: string;

  @IsOptional()
  assento4: string;

  @IsOptional()
  assento5: string;
}
