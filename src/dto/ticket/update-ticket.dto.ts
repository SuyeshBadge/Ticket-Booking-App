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
  customerName?: string;

  @IsString()
  @IsOptional()
  @Type(() => String)
  movieTitle?: string;

  @IsString()
  @IsOptional()
  @Type(() => Date)
  movieTime?: Date;
  ticketPrice?: number;

  @IsString()
  @IsOptional()
  @IsEnum(TicketType)
  @Type(() => String)
  ticketType?: string;

  @IsString()
  @IsOptional()
  @Type(() => String)
  seatNumber?: string;

  @IsString()
  @IsOptional()
  @Type(() => String)
  theaterRoom?: string;
}
