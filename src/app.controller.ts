import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // npm install @nestjs/common으로 자동 임포트
  @Post('/hello')
  sayHello(): string {
    return 'Hello everyone'
  }
}
