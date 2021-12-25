import {
  IsString,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsOptional,
  IsDecimal,
  IsDate,
  IsMilitaryTime,
} from 'class-validator';
import { Companhia } from 'src/companhias/companhia.entity';
import { JoinColumn, OneToMany } from 'typeorm';
import { Voo } from '../entities/voo.entity';

export class CreateVooDto {
  @IsOptional()
  companhia: Companhia;

  @IsString()
  @IsNotEmpty({ message: 'Informe um nome de origem valido' })
  @MinLength(2, { message: 'O nome da origem deve ter mais de 4 caracteres ' })
  @MaxLength(100, {
    message: 'O nome da origem deve ter menos de 100 caracteres',
  })
  origem: string;

  @IsString()
  @IsNotEmpty({ message: 'Informe um nome do destino valido' })
  @MinLength(2, { message: 'O nome do destino deve ter mais de 4 caracteres ' })
  @MaxLength(100, {
    message: 'O nome do destino deve ter menos de 100 caracteres',
  })
  destino: string;

  @IsDecimal()
  @IsNotEmpty({ message: 'Informe um Valor de Voo valido' })
  valor: string;

  @IsMilitaryTime()
  horaOrigem: string;
}
