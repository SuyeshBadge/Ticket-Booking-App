import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { TicketRepository } from './ticket.repository';
import { ICreateTicket, IUpdateTicket } from 'src/interface/ticket.interface';

@Injectable()
export class TicketService {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async getTicket(id: number) {
    try {
      const ticket = await this.ticketRepository.findOne({ id: id });
      if (!ticket) {
        throw new BadRequestException('Ticket not found!!');
      }
      return ticket;
    } catch (error) {
      if (error.response) {
        throw error;
      }
      throw new InternalServerErrorException('Something went wrong.');
    }
  }

  async createTicket(data: ICreateTicket) {
    try {
      if (!data.seat_number) {
        data.seat_number =
          String.fromCharCode(Math.floor(Math.random() * 15) + 65) +
          Array.from({ length: 2 }, () => Math.floor(Math.random() * 10)).join(
            '',
          );
      }
      if (!data.theater_room) {
        data.theater_room = String.fromCharCode(
          Math.floor(Math.random() * 10) + 65,
        );
      }
      const newTicket = await this.ticketRepository.create(data);

      return newTicket;
    } catch (error) {
      if (error.response) {
        throw error;
      }
      throw new InternalServerErrorException('Something went wrong.');
    }
  }

  async updateTicket(id: number, data: IUpdateTicket) {
    try {
      return this.ticketRepository.update(id, data);
    } catch (error) {
      if (error.response) {
        throw error;
      }
      throw new InternalServerErrorException('Something went wrong.');
    }
  }

  async deleteTicket(id: number) {
    try {
      return this.ticketRepository.delete(id);
    } catch (error) {
      if (error.response) {
        throw error;
      }
      throw new InternalServerErrorException('Something went wrong.');
    }
  }

  async getRevenueByMonth(fromDate: Date, toDate: Date) {
    let where = ``;
    if (fromDate && !toDate) {
      where = `WHERE movie_time >= '${fromDate.toISOString()}'`;
    }
    if (toDate && !fromDate) {
      where = `WHERE movie_time <= '${toDate.toISOString()}'`;
    }
    if (fromDate && toDate) {
      where = `WHERE movie_time >=  '${fromDate.toISOString()}' AND movie_time <=  '${toDate.toISOString()}
      '`;
    }
    const query = `SELECT DATE_TRUNC('month', movie_time) AS month, SUM(ticket_price) AS price FROM ticket_schema ${where} GROUP BY month ORDER BY month`;
    return await this.ticketRepository.runRawQuery(query);
  }

  async getVisitsByMonth(fromDate: Date, toDate: Date) {
    let where = ``;
    if (fromDate && !toDate) {
      where = `WHERE movie_time >= '${fromDate.toISOString()}'`;
    }
    if (toDate && !fromDate) {
      where = `WHERE movie_time <= '${toDate.toISOString()}'`;
    }
    if (fromDate && toDate) {
      where = `WHERE movie_time >=  '${fromDate.toISOString()}' AND movie_time <=  '${toDate.toISOString()}
      '`;
    }
    const query = `SELECT DATE_TRUNC('month', movie_time) AS month, COUNT(*) AS visits FROM ticket_schema ${where} GROUP BY month ORDER BY month;`;
    return this.ticketRepository.runRawQuery(query);
  }
}
