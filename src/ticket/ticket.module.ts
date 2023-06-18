import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketSchema } from './ticket.schema';
import { TicketRepository } from './ticket.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TicketSchema])],
  controllers: [TicketController],
  providers: [TicketService, TicketRepository],
  exports: [TicketService],
})
export class TicketModule {}
