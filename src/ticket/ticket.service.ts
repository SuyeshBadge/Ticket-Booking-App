import { Injectable } from '@nestjs/common';
import { TicketRepository } from './ticket.repository';
import { ICreateTicket, IUpdateTicket } from 'src/interface/ticket.interface';

@Injectable()
export class TicketService {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async getTicket(id: number) {
    return this.ticketRepository.findOne({ id: id });
  }

  async createTicket(data: ICreateTicket) {
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
  }

  async updateTicket(id: number, data: IUpdateTicket) {
    return this.ticketRepository.update(id, data);
  }
}
