import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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
    return this.cadastroService.findById(+params.id);
  }

  @Post()
  create(@Body() body: any) {
    return this.cadastroService.create(body);
  }

  @Patch(':id')
  update(@Param() params, @Body() data) {
    return this.cadastroService.update(+params.id, data);
  }
}
