import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CadastroDto {
  id: number;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  telefone: number;

  @IsNumber()
  @IsNotEmpty()
  CPF: number;

  @IsNumber()
  @IsNotEmpty()
  CEP: number;
}
