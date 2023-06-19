import { Controller, Get, Param, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { Response } from 'src/utils/response/response.decorator';
import {
  GetAnalyticsRevenueQueryDto,
  GetAnalyticsVisitsQueryDto,
} from 'src/dto/analytics/get-analytics.dto';

@Controller('analytics')
@Response('analytics')
export class AnalyticsController {
  constructor(private readonly analyticService: AnalyticsService) {}
  @Get('/revenue/:method')
  async getRevenue(
    @Param() params: { method: string },
    @Query() query: GetAnalyticsRevenueQueryDto,
  ) {
    if (params.method === 'db-aggregation') {
      return this.analyticService.getRevenueByDbAggregation(query);
    } else {
      return this.analyticService.calculateRevenueDirectly(query);
    }
  }

  @Get('/visited/:method')
  async getVisited(
    @Param() params: { method: string },
    @Query() query: GetAnalyticsVisitsQueryDto,
  ) {
    if (params.method === 'db-aggregation') {
      return this.analyticService.getVisitsByDbAggregation(query);
    } else {
      return this.analyticService.calculateVisitsDirectly(query);
    }
  }
}
