import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class DeleteTicketDto {
  @IsNumber()
  @Type(() => Number)
  id: number;
}
