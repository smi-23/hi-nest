import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World jogaram test!';
  }

  getHi(): string {
    return 'hi nest from service';
  }
}
