import { Controller, Get } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { Response } from 'src/utils/response/response.decorator';

@Controller('analytics')
@Response('analytics')
export class AnalyticsController {
  constructor(private readonly analyticService: AnalyticsService) {}
  @Get('/revenue')
  async getRevenue() {
    return true;
  }

  @Get('/visited')
  async getVisited() {
    return true;
  }
}
