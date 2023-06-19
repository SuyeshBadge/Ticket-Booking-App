import { Injectable } from '@nestjs/common';
import { IGetRevenue, IGetVisits } from 'src/interface/analytics.interface';
import { TicketService } from 'src/ticket/ticket.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly ticketService: TicketService) {}

  async getRevenueByDbAggregation(data: IGetRevenue) {
    const result = await this.ticketService.getRevenueByMonth(
      data.fromDate,
      data.toDate,
    );
    let formattedResponseData: [{ month: string; summaryProfit: number }];
    if (result?.length) {
      formattedResponseData = result.map(
        (entry: { month: Date; price: number }) => {
          const month = entry.month.toLocaleString('en-US', { month: 'long' });
          const summaryProfit = entry.price;
          return {
            month,
            summaryProfit,
          };
        },
      );
    }
    return formattedResponseData;
  }
  async calculateRevenueDirectly(data) {
    return true;
  }

  async getVisitsByDbAggregation(data: IGetVisits) {
    const result = await this.ticketService.getVisitsByMonth(
      data.fromDate,
      data.toDate,
    );
    let formattedResponseData: [{ month: string; visits: number }];
    if (result?.length) {
      formattedResponseData = result.map(
        (entry: { month: Date; visits: number }) => {
          const month = entry.month.toLocaleString('en-US', { month: 'long' });
          const summaryVisits = entry.visits;
          return {
            month,
            summaryVisits,
          };
        },
      );
    }
    return formattedResponseData;
  }

  async calculateVisitsDirectly(data) {
    return true;
  }
}
