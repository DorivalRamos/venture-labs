import { Module } from '@nestjs/common';
import { CompanhiasService } from './companhias.service';
import { CompanhiasController } from './companhias.controller';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanhiaRepository } from './companhias.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CompanhiaRepository])],
  controllers: [CompanhiasController],
  providers: [CompanhiasService],
})
export class CompanhiasModule {}
