import { Injectable } from '@nestjs/common';
import { ICadastro } from './ICadastro';

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
    return this.cadastros;
  }

  findById(id: number) {
    return this.cadastros.find((cadastro) => cadastro.id === id);
  }

  update(id: number, cadastro: ICadastro) {
    const index = this.cadastros.findIndex((cadastro) => cadastro.id === id);
    this.cadastros[index] = cadastro;
    return cadastro;
  }

  create(cadastro: ICadastro) {
    return this.cadastros.push(cadastro);
  }

  delete(id: number) {
    const index = this.cadastros.findIndex((cadastro) => cadastro.id === id);
    delete this.cadastros[index];
    return true;
  }
}
