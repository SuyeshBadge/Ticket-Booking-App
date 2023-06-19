import { Type } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';

export class GetAnalyticsRevenueQueryDto {
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  readonly fromDate: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  readonly toDate: Date;
}

export class GetAnalyticsVisitsQueryDto {
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  readonly fromDate: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  readonly toDate: Date;
}
