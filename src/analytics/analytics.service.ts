import { Injectable } from '@nestjs/common';
import { TicketService } from 'src/ticket/ticket.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly ticketService: TicketService) {}

  async getRevenueByDbAggregation(data) {
    return true;
  }
  async calculateRevenueDirectly(data) {
    return true;
  }

  async getVisitsByDbAggregation(data) {
    return true;
  }
  async calculateVisitsDirectly(data) {
    return true;
  }
}
