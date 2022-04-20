import { Controller, Get } from '@nestjs/common';
import { CadastroService } from './cadastro.service';

@Controller('cadastro')
export class CadastroController {
  constructor(private cadastroService: CadastroService) {}
  @Get()
  findAll() {
    return this.cadastroService.findAll();
  }
}
