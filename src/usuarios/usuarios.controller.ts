import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuarios } from '@prisma/client';
import { FindUsuarioDto } from './dto/find-usuario.dto';
import { RemoveUsuarioDto } from './dto/remove-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll(): Promise<Usuarios[] | object> {
    return this.usuariosService.findAll();
  }

  @Get()
  findOne(@Body() findUsuarioDto: FindUsuarioDto): Promise<Usuarios | object> {
    return this.usuariosService.findOne(findUsuarioDto);
  }

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuarios> {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Delete()
  remove(@Body() removeUsuarioDto: RemoveUsuarioDto): Promise<Usuarios> {
    return this.usuariosService.remove(removeUsuarioDto);
  }
}
