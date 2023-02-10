import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CousersService } from './courses.service';

@Module({
  controllers: [CoursesController],
  providers: [CousersService],
})
export class CoursesModule {}
