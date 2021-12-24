import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './configs/typeorm.config';
import { CompanhiasModule } from './companhias/companhias.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), CompanhiasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
