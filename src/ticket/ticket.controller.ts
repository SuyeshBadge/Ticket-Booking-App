import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AppGuard } from 'src/guards/app.guard';

@Controller('ticket')
@UseGuards(AppGuard)
export class TicketController {
  @Get('/:id')
  async getTicket() {
    return true;
  }

  @Post()
  async createTicket() {
    return true;
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
