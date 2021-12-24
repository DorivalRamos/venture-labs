import { IsString, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateCompanhiaDto {
  @IsString()
  @IsNotEmpty({ message: 'Informe um nome da companhia valido' })
  @MinLength(4, { message: 'O nome da Campania deve ter mais de 4 carters ' })
  @MaxLength(200, {
    message: 'O nome da companhia deve ter menos de 200 caracteres',
  })
  nome: string;
}
