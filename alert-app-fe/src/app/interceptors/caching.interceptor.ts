import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, any>();

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Only cache GET requests
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    const cachedResponse = this.cache.get(req.urlWithParams);
    if (cachedResponse) {
      // Serve from cache
      return of(cachedResponse);
    }

    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log('not cached ', req.urlWithParams, event);
          // Cache the new response
          this.cache.set(req.urlWithParams, event);
        }
      })
    );
  }
}
