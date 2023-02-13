import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), CoursesModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
