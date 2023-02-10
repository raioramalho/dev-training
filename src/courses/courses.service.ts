import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';
import { LocalErros } from 'src/helpers/error.helper';

@Injectable()
export class CousersService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do NestJs',
      description: 'NestJs é um framework',
      tags: ['NodeJs', 'NestJs', 'TypeScript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((course) => course.id === Number(id));
    if (!course) {
      throw new HttpException(
        `${LocalErros.COURSE_NOT_FOUND} ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const existentCourse = this.courses.findIndex(
      (couse) => couse.id === Number(id),
    );

    this.courses[existentCourse] = updateCourseDto;
  }

  remove(id: string) {
    const existentCourse = this.courses.findIndex(
      (couse) => couse.id === Number(id),
    );

    if (existentCourse >= 0) {
      this.courses.splice(existentCourse, 1);
    }
  }
}
