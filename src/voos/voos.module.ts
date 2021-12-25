import { Module } from '@nestjs/common';
import { VoosService } from './voos.service';
import { VoosController } from './voos.controller';
import { VooRepository } from './voos.repository';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [TypeOrmModule.forFeature([VooRepository])],
  controllers: [VoosController],
  providers: [VoosService],
})
export class VoosModule {}
