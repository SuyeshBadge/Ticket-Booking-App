import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from './utils/response/response.decorator';

@Controller()
@Response('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health-check')
  healthCheck(): boolean {
    return true;
  }
}
