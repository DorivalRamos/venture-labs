import {
  IsString,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsDecimal,
  IsDateString,
  IsDate,
} from 'class-validator';
import { Companhia } from 'src/Models/companhia.entity';

export class CreateVooDto {
  @IsString()
  @IsNotEmpty({ message: 'Infome a companhia Aéria do Voo' })
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

  @IsString()
  horaSaida: string;
}
