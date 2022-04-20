import { Injectable } from '@nestjs/common';

@Injectable()
export class CadastroService {
  private cadastros = [
    {
      nome: 'Claudio',
      cep: '20973011',
    },
    {
      nome: 'Cleber',
      cep: '20973551',
    },
  ];
  findAll() {
    return this.cadastros;
  }
}
