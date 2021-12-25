import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateVooDto } from './create-voo.dto';

export class UpdateVooDto {
  @IsOptional()
  assento1: boolean;

  @IsOptional()
  assento2: boolean;

  @IsOptional()
  assento3: boolean;

  @IsOptional()
  assento4: boolean;

  @IsOptional()
  assento5: boolean;

  @IsOptional()
  assento6: boolean;

  @IsOptional()
  assento7: boolean;

  @IsOptional()
  assento8: boolean;

  @IsOptional()
  assento9: boolean;

  @IsOptional()
  assento10: boolean;
}
