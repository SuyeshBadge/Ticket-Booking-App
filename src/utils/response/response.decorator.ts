import { applyDecorators, UseInterceptors } from '@nestjs/common';

import { ResponseDefaultInterceptor } from './response.interceptor';

export function Response(messagePath: string, statusCode?: number): any {
  return applyDecorators(
    UseInterceptors(ResponseDefaultInterceptor(messagePath, statusCode)),
  );
}
