import { ConfigService } from '@nestjs/config';
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly configService: ConfigService) {}

  @Get()
  getData() {
    //console.log(process.env.MONGODB_URI);
    //console.log(this.configService.get<str);
    return this.appService.getData();
  }
}
