import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
export class GetTicketDto {
  @IsNumber()
  @Type(() => Number)
  id: number;
}
