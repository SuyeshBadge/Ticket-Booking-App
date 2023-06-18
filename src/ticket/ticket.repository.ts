import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { TicketSchema } from './ticket.schema';

@Injectable()
export class TicketRepository {
  constructor(
    @InjectRepository(TicketSchema)
    private readonly ticketRepository: Repository<TicketSchema>,
  ) {}

  async find(options: FindManyOptions<TicketSchema>) {
    return this.ticketRepository.find(options);
  }

  async findOne(options: FindOneOptions<TicketSchema>) {
    return this.ticketRepository.findOne(options);
  }

  async create(userData) {
    return this.ticketRepository.save(userData);
  }
}
