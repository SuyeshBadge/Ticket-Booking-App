import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AppGuard } from 'src/guards/app.guard';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from 'src/dto/ticket/create-ticket.dto';
import { Response } from 'src/utils/response/response.decorator';

@Controller('ticket')
@UseGuards(AppGuard)
@Response('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}
  @Get('/:id')
  async getTicket() {
    return this.ticketService.getTicket();
  }

  @Post()
  async createTicket(@Body() body: CreateTicketDto) {
    return this.ticketService.createTicket(body);
  }

  @Patch('/:id')
  async updateTicket() {
    return true;
  }

  @Delete('/:id')
  async deleteTicket() {
    return true;
  }
}
