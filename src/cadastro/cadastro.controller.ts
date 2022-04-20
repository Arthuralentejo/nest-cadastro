import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { CadastroService } from './cadastro.service';

@Controller('cadastro')
export class CadastroController {
  constructor(private cadastroService: CadastroService) {}

  @Get()
  findAll() {
    return this.cadastroService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.cadastroService.findById(Number(params.id));
  }

  @Patch(':id')
  update(@Param() params, @Body() data) {
    return this.cadastroService.update(Number(params.id), data);
  }
}
