import { Injectable } from '@nestjs/common';
import { ICadastro } from './ICadastro';
import { CadastroDto } from './CadastroDto';

@Injectable()
export class CadastroService {
  private cadastros: ICadastro[] = [
    {
      id: 1,
      nome: 'Claudio',
      telefone: 992163078,
      CPF: 15594596704,
      CEP: 20973011,
    },
    {
      id: 2,
      nome: 'Antonio',
      telefone: 992163078,
      CPF: 15594596704,
      CEP: 20973011,
    },
  ];
  findAll() {
    return this.cadastros.filter(Boolean);
  }

  async findById(id: number) {
    const cadastro = this.cadastros.find((cadastro) => cadastro?.id === id);
    if (!cadastro) throw Error(`Cadastro com o ID '${id}' não encontrado`);
    return cadastro;
  }

  async update(id: number, cadastroDto: CadastroDto) {
    const index = this.cadastros.findIndex((cadastro) => cadastro?.id === id);
    if (index < 0) throw Error(`Cadastro com o ID '${id}' não encontrado`);
    const cadastro: ICadastro = {
      id,
      ...cadastroDto,
    };
    this.cadastros[index] = cadastro;
    return cadastro;
  }

  create(cadastroDto: CadastroDto) {
    const cad: ICadastro = {
      id: this.cadastros.length,
      ...cadastroDto,
    };
    this.cadastros.push(cad);
    return cad;
  }

  async delete(id: number) {
    const index = this.cadastros.findIndex((cadastro) => cadastro?.id === id);
    if (index < 0) throw Error(`Cadastro com o ID '${id}' não encontrado`);
    delete this.cadastros[index];
    return true;
  }
}
