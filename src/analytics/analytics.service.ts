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
  async calculateRevenueDirectly(data: IGetRevenue) {
    let allTickets = await this.ticketService.getAllTickets({});
    if (data.fromDate) {
      allTickets = allTickets.filter(
        (ticket) => ticket.movie_time.getTime() >= data.fromDate.getTime(),
      );
    }
    if (data.toDate) {
      allTickets = allTickets.filter(
        (ticket) => ticket.movie_time.getTime() <= data.toDate.getTime(),
      );
    }

    const summary: { month?: string; profit?: number } = {};

    allTickets.forEach((ticket) => {
      const movieTime = new Date(ticket.movie_time);
      const month: string = movieTime.toLocaleString('en-US', {
        month: 'long',
      });
      const profit: number = +ticket.ticket_price;

      if (summary[month]) {
        summary[month] += profit;
      } else {
        summary[month] = profit;
      }
    });

    const summaryList = Object.entries(summary).map(([month, profit]) => ({
      month,
      summaryProfit: profit.toString(),
    }));

    return summaryList;
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

  async calculateVisitsDirectly(data: IGetVisits) {
    let allTickets = await this.ticketService.getAllTickets({});
    if (data.fromDate) {
      allTickets = allTickets.filter(
        (ticket) => ticket.movie_time.getTime() >= data.fromDate.getTime(),
      );
    }
    if (data.toDate) {
      allTickets = allTickets.filter(
        (ticket) => ticket.movie_time.getTime() <= data.toDate.getTime(),
      );
    }
    const summary: { month?: string; visits?: number } = {};

    allTickets.forEach((ticket) => {
      const movieTime = new Date(ticket.movie_time);
      const month: string = movieTime.toLocaleString('en-US', {
        month: 'long',
      });

      if (summary[month]) {
        summary[month] += 1;
      } else {
        summary[month] = 1;
      }
    });

    const summaryList = Object.entries(summary).map(([month, profit]) => ({
      month,
      summaryVisits: profit.toString(),
    }));

    return summaryList;
  }
}
