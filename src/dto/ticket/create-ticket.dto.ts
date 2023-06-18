import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { TicketType } from 'src/enum/ticket/ticket.enum';

export class CreateTicketDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Type(() => String)
  customerName: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Type(() => String)
  movieTitle: string;

  @IsString()
  @IsOptional()
  @IsEnum(TicketType)
  @Type(() => String)
  ticketType?: string;

  @IsDate()
  @IsDefined()
  @Type(() => Date)
  movieTime: Date;

  @IsNumber()
  @Type(() => Number)
  ticketPrice: number;
}
