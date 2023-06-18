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
      if (!data.seatNumber) {
        data.seatNumber =
          String.fromCharCode(Math.floor(Math.random() * 15) + 65) +
          Array.from({ length: 2 }, () => Math.floor(Math.random() * 10)).join(
            '',
          );
      }
      if (!data.theaterRoom) {
        data.theaterRoom = String.fromCharCode(
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
}
