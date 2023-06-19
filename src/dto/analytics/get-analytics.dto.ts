import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsOptional, IsString } from 'class-validator';

enum Method {
  db = 'db-aggregation',
  direct = 'direct',
}
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
export class GetRevenueParamDto {
  @IsString()
  @IsEnum(Method)
  method: string;
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

export class GetVisitedParamDto {
  @IsString()
  @IsEnum(Method)
  method: string;
}
