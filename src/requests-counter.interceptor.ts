import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { readFile, writeFile } from 'fs/promises';

let requestsCounter = 0;

@Injectable()
export class RequestsCounterInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    requestsCounter++;
    return next.handle();
  }
}

setInterval(async () => {
  let fileCounter = 0;
  try {
    const fileBuffer = await readFile('requestsCounter.json');
    fileCounter = JSON.parse(fileBuffer.toString())?.counter;
  } catch (ex) {
    console.error(ex);
  }

  const counter = fileCounter + requestsCounter;
  requestsCounter = 0;

  try {
    await writeFile('requestsCounter.json', JSON.stringify({ counter }));
  } catch (ex) {
    console.error(ex);
  }
}, 1000);
