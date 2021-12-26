import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './configs/typeorm.config';
import { CompanhiasModule } from './companhias/companhias.module';
import { VoosModule } from './voos/voos.module';
import { AssentosModule } from './assentos/assentos.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), CompanhiasModule, VoosModule, AssentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
