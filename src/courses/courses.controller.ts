import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CousersService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CousersService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  //extraindo um param especifico.
  findOne(@Param('id') id) {
    return this.coursesService.findOne(id);
  }

  @Post()
  //Status code estático
  @HttpCode(HttpStatus.CREATED)
  create(@Body() data) {
    return this.coursesService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data) {
    return this.coursesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.coursesService.remove(id);
  }
}
