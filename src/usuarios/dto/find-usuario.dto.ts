import { IsNotEmpty, IsNumber } from 'class-validator';

export class FindUsuarioDto {
  @IsNotEmpty()
  @IsNumber()
  CodUsu: number;
}
