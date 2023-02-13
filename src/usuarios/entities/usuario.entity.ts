import { Usuarios } from '@prisma/client';

export class UsuarioEntity implements Usuarios {
  CodUso: number;
  Email: string;
  Nome: string;
  SobreNome: string;
  CreatedAt: Date;
  UpdatedAt: Date;
}
