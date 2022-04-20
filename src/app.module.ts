import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastroController } from './cadastro/cadastro.controller';
import { CadastroService } from './cadastro/cadastro.service';

@Module({
  imports: [],
  controllers: [AppController, CadastroController],
  providers: [AppService, CadastroService],
})
export class AppModule {}
