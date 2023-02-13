import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    try {
      return await this.prisma.usuarios.findMany();
    } catch (error) {
      return { error };
    }
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      return await this.prisma.usuarios.create({
        data: createUsuarioDto,
      });
    } catch (error) {
      return { error };
    }
  }
}
