import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // nest는 컨트롤러와 비즈니스 로직을 분리하고 싶어함
  // controller는 그저 url을 가져오는 역할 service는 비즈니스 로직을 담당함
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // npm install @nestjs/common으로 자동 임포트
  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
}
