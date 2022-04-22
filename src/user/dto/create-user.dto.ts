import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateUserDto {
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
