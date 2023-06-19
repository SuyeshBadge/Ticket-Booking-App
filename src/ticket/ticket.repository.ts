import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, FindOptionsSelect } from 'typeorm';
import { TicketSchema } from './ticket.schema';
import { ICreateTicket } from 'src/interface/ticket.interface';

@Injectable()
export class TicketRepository {
  constructor(
    @InjectRepository(TicketSchema)
    private readonly ticketRepository: Repository<TicketSchema>,
  ) {}

  async find(
    filter: FindOptionsWhere<TicketSchema>,
    projection?: FindOptionsSelect<TicketSchema>,
  ): Promise<TicketSchema[]> {
    return this.ticketRepository.find({ where: filter, select: projection });
  }

  async findOne(
    filter: FindOptionsWhere<TicketSchema>,
    projection?: FindOptionsSelect<TicketSchema>,
  ): Promise<TicketSchema> {
    return this.ticketRepository.findOne({ where: filter, select: projection });
  }

  async create(ticketData: ICreateTicket): Promise<TicketSchema> {
    const newTicket = this.ticketRepository.create(ticketData);
    return this.ticketRepository.save(newTicket);
  }

  async update(
    id: number,
    ticketData: Partial<TicketSchema>,
  ): Promise<TicketSchema> {
    const ticket = await this.ticketRepository.findOne({ where: { id } });
    if (!ticket) {
      return null;
    }
    Object.assign(ticket, ticketData);
    return this.ticketRepository.save(ticket);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.ticketRepository.delete({ id });
    return result.affected > 0;
  }

  async runRawQuery(query: string): Promise<any> {
    return await this.ticketRepository.query(query);
  }
}
