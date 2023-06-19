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
  customer_name: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Type(() => String)
  movie_title: string;

  @IsString()
  @IsOptional()
  @IsEnum(TicketType)
  @Type(() => String)
  ticket_type?: string;

  @IsDate()
  @IsDefined()
  @Type(() => Date)
  movie_time: Date;

  @IsNumber()
  @Type(() => Number)
  ticket_price: number;
}
