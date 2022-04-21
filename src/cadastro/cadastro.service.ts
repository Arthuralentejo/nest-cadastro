import { Injectable } from '@nestjs/common';

interface ICadastro {
  id: number;
  nome: string;
  telefone: number;
  CPF: number;
  CEP: number;
}

@Injectable()
export class CadastroService {
  private cadastros = [
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

  update(id: number, data) {
    const target = this.cadastros.find((cadastro) => cadastro.id === id);

    return 'Teste' + id;
  }

  create(cadastro: ICadastro) {
    return this.cadastros.push(cadastro);
  }
}
