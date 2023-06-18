import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AppGuard } from 'src/guards/app.guard';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from 'src/dto/ticket/create-ticket.dto';
import { Response } from 'src/utils/response/response.decorator';
import { GetTicketDto } from 'src/dto/ticket/get-ticket.dto';
import {
  UpdateTicketBodyDto,
  UpdateTicketParamDto,
} from 'src/dto/ticket/update-ticket.dto';

@Controller('ticket')
@UseGuards(AppGuard)
@Response('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}
  @Get('/:id')
  async getTicket(@Param() params: GetTicketDto) {
    return this.ticketService.getTicket(params.id);
  }

  @Post()
  async createTicket(@Body() body: CreateTicketDto) {
    return this.ticketService.createTicket(body);
  }

  @Patch('/:id')
  async updateTicket(
    @Param() params: UpdateTicketParamDto,
    @Body() body: UpdateTicketBodyDto,
  ) {
    return this.ticketService.updateTicket(params.id, body);
  }

  @Delete('/:id')
  async deleteTicket() {
    return true;
  }
}
