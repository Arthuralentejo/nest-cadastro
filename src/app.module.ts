import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from "./app.service";
import { CadastroController } from "./cadastro/cadastro.controller";

@Module({
  imports: [],
  controllers: [AppController, CadastroController],
  providers: [AppService]
})
export class AppModule {}
