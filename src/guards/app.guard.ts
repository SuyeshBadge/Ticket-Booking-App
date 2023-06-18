import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const apiSecret = request.headers['x-api-secret'];
    if (apiSecret === process.env.API_SECRET) {
      return true;
    }

    throw new UnauthorizedException('Invalid/Missing API secret.');
  }
}
