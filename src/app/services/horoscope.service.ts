import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HoroscopeDto } from '../models/horoscope.model';
import { HoroscopeSign, HoroscopeSignToRo } from '../helpers/horoscope-signs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class HoroscopeService {
  BASE_URL: string = environment.be;
  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) {}

  getHoroscopeBySign(sign: string): Observable<HoroscopeDto> {
    return this.authService.getAuthHeaders().pipe(
      switchMap((headers) => {
        return this.http
          .get<HoroscopeDto>(
            this.BASE_URL +
              '/api' +
              '/horoscope/' +
              HoroscopeSignToRo[sign as keyof typeof HoroscopeSignToRo],
            headers
          )
          .pipe(
            catchError(() => {
              new Error('Error while fetching horoscope sign by sign!');
              return of();
            })
          );
      })
    );
  }

  getHoroscope(): Observable<HoroscopeDto[]> {
    return this.authService.getAuthHeaders().pipe(
      switchMap((headers) => {
        return this.http
          .get<HoroscopeDto[]>(this.BASE_URL + '/api' + '/horoscope', headers)
          .pipe(
            catchError(() => {
              new Error('Error while fetching horoscope!');
              return of();
            })
          );
      })
    );
  }
}
