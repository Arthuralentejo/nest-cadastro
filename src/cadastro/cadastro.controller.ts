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
  create(@Body() cadastroDto: CadastroDto) {
    return this.cadastroService.create(cadastroDto);
  }

  @Patch(':id')
  update(@Param('id') id, @Body() cadastroDto: CadastroDto) {
    return this.cadastroService.update(+id, cadastroDto).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.cadastroService.delete(+id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
