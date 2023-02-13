import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsEmail()
  Email: string;
  @IsNotEmpty()
  Nome: string;
  @IsNotEmpty()
  SobreNome: string;
}
