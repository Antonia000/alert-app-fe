import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NowcastAlert } from '../models/nowcast-alert.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class NowcastService {
  BASE_URL: string = environment.be;
  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) {}

  getNowcastAlerts(): Observable<NowcastAlert[]> {
    return this.authService.getAuthHeaders().pipe(
      switchMap((headers) =>
        this.http
          .get<NowcastAlert[]>(this.BASE_URL + '/api' + '/nowcast', headers)
          .pipe(
            catchError(() => {
              new Error('Error while fetching the nowcasting alerts!');
              return of([]);
            })
          )
      )
    );
  }
  getNowcastAlertsByCounty(county: string): Observable<NowcastAlert[]> {
    return this.authService.getAuthHeaders().pipe(
      switchMap((headers) => {
        return this.http
          .get<NowcastAlert[]>(
            this.BASE_URL + '/api' + '/nowcast/' + county,
            headers
          )
          .pipe(
            catchError(() => {
              new Error(
                'Error while fetching the nowcasting alerts by county!'
              );
              return of();
            })
          );
      })
    );
  }
}

//https://www.google.com/recaptcha/admin/create
