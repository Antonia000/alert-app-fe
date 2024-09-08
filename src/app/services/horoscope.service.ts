import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HoroscopeDto } from '../models/horoscope.model';
import { HoroscopeSign, HoroscopeSignToRo } from '../helpers/horoscope-signs';

@Injectable({ providedIn: 'root' })
export class HoroscopeService {
  BASE_URL: string = environment.be;
  constructor(private readonly http: HttpClient) {}

  getHoroscopeBySign(sign: string): Observable<HoroscopeDto> {
    return this.http
      .get<HoroscopeDto>(
        this.BASE_URL +
          '/api' +
          '/horoscope/' +
          HoroscopeSignToRo[sign as keyof typeof HoroscopeSignToRo]
      )
      .pipe(
        catchError(() => {
          new Error('Error while fetching horoscope sign by sign!');
          return of();
        })
      );
  }
  getHoroscope(): Observable<HoroscopeDto[]> {
    return this.http
      .get<HoroscopeDto[]>(this.BASE_URL + '/api' + '/horoscope')
      .pipe(
        catchError(() => {
          new Error('Error while fetching horoscope!');
          return of();
        })
      );
  }
}
