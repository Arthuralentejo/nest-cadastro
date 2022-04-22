import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import { ICadastro } from './ICadastro';
import { CadastroDto } from './CadastroDto';

@Controller('cadastro')
export class CadastroController {
  constructor(private cadastroService: CadastroService) {}

  @Get()
  findAll() {
    return this.cadastroService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id) {
    return this.cadastroService.findById(+id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() cadastro: CadastroDto) {
    return this.cadastroService.create(cadastro);
  }

  @Patch(':id')
  update(@Param('id') id, @Body() cadastro: ICadastro) {
    return this.cadastroService.update(+id, cadastro);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.cadastroService.delete(+id);
  }
}
