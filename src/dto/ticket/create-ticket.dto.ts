import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

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
