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
  horaOrigem: string;
}
