import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuarios } from '@prisma/client';
import { FindUsuarioDto } from './dto/find-usuario.dto';
import { RemoveUsuarioDto } from './dto/remove-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Usuarios[] | object> {
    try {
      return await this.prisma.usuarios.findMany();
    } catch (error) {
      return { error };
    }
  }

  async findOne(findUsuarioDto: FindUsuarioDto): Promise<Usuarios | object> {
    try {
      return await this.prisma.usuarios.findUniqueOrThrow({
        where: { CodUso: findUsuarioDto.CodUsu },
      });
    } catch (error) {
      return { error };
    }
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuarios> {
    try {
      return await this.prisma.usuarios.create({
        data: createUsuarioDto,
      });
    } catch (error) {
      return error;
    }
  }

  async remove(removeUsuarioDto: RemoveUsuarioDto): Promise<Usuarios> {
    try {
      return await this.prisma.usuarios.delete({
        where: { CodUso: removeUsuarioDto.CodUsu },
      });
    } catch (error) {
      return error;
    }
  }
}
