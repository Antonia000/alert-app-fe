import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NowcastAlert } from '../models/nowcast-alert.model';
import { WeatherForecast } from '../models/weather-forecast.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  BASE_URL: string = environment.be;
  constructor(private readonly http: HttpClient) {}

  getFirstWeatherForecasts(length: number): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>('/api' + '/weather').pipe(
      map((weatherForecasts) => weatherForecasts.slice(0, length)),
      map((weatherForecasts) =>
        weatherForecasts.map((forecast: WeatherForecast) => {
          return {
            ...forecast,
            temperatura: Math.round(Number(forecast.temperatura)).toString(),
          };
        })
      ),
      catchError(() => {
        new Error('Error while fetching the weather forecasts!');
        return of([]);
      })
    );
  }
  getWeatherByCity(city: string): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>('/api' + '/weather/' + city).pipe(
      catchError(() => {
        new Error('Error while fetching the weather forecasts!');
        return of([]);
      })
    );
  }
}

//https://www.google.com/recaptcha/admin/create
