import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  WeatherConditions,
  WeatherForecast,
} from '../models/weather-forecast.model';
import { determineWeatherCardImg } from '../helpers/determine-weather-img.helper';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  BASE_URL: string = environment.be;
  selectedCity: string = 'bucuresti-baneasa';
  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) {}

  getFirstWeatherForecasts(length: number): Observable<WeatherForecast[]> {
    return this.authService.getAuthHeaders().pipe(
      switchMap((headers) => {
        return this.http
          .get<WeatherForecast[]>(this.BASE_URL + '/api' + '/weather', headers)
          .pipe(
            map((weatherForecasts) => weatherForecasts.slice(0, length)),
            map((weatherForecasts) =>
              weatherForecasts.map((forecast: WeatherForecast) => {
                const img = determineWeatherCardImg(forecast.nebulozitate);
                return {
                  ...forecast,
                  temperatura: Math.round(
                    Number(forecast.temperatura)
                  ).toString(),
                  img: img as unknown as WeatherConditions,
                };
              })
            ),
            catchError(() => {
              new Error('Error while fetching the weather forecasts!');
              return of([]);
            })
          );
      })
    );
  }

  getWeatherByCity(city: string): Observable<WeatherForecast> {
    this.selectedCity = city;

    return this.authService.getAuthHeaders().pipe(
      switchMap((headers) => {
        return this.http
          .get<WeatherForecast>(
            this.BASE_URL + '/api' + '/weather/' + city,
            headers
          )
          .pipe(
            map((forecast) => {
              const img = determineWeatherCardImg(forecast.nebulozitate);
              return {
                ...forecast,
                temperatura: Math.round(
                  Number(forecast.temperatura)
                ).toString(),
                img: img as unknown as WeatherConditions,
              };
            }),
            catchError(() => {
              new Error('Error while fetching the weather forecasts!');
              return of();
            })
          );
      })
    );
  }

  getSelectedCity() {
    return this.selectedCity ?? 'bucuresti-baneasa';
  }
}

//https://www.google.com/recaptcha/admin/create
