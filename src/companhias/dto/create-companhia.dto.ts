import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  Matches,
  IsOptional,
} from 'class-validator';

export class CreateCompanhiaDto {
  @IsString()
  @IsNotEmpty({ message: 'Informe um nome da companhia valido' })
  @MinLength(4, { message: 'O nome da Campania dev ter menos de 200 carters ' })
  @MaxLength(200, {
    message: 'O nome da companhia deve ter menos de 200 caracteres',
  })
  nome: string;
}
