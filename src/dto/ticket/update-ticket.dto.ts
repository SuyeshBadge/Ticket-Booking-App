import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { TicketType } from 'src/enum/ticket/ticket.enum';

export class UpdateTicketParamDto {
  @IsNumber()
  @Type(() => Number)
  id: number;
}

export class UpdateTicketBodyDto {
  @IsString()
  @IsOptional()
  @Type(() => String)
  customer_name?: string;

  @IsString()
  @IsOptional()
  @Type(() => String)
  movie_title?: string;

  @IsString()
  @IsOptional()
  @Type(() => Date)
  movie_time?: Date;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  ticket_price?: number;

  @IsString()
  @IsOptional()
  @IsEnum(TicketType)
  @Type(() => String)
  ticket_type?: string;

  @IsString()
  @IsOptional()
  @Type(() => String)
  seat_number?: string;

  @IsString()
  @IsOptional()
  @Type(() => String)
  theater_room?: string;
}
