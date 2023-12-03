import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherForecast } from '../models/weather-forecast.model';
import { determineWeatherCardImg } from '../helpers/determine-weather-img.helper';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  BASE_URL: string = environment.be;
  selectedCity: string = 'bucuresti-baneasa';
  constructor(private readonly http: HttpClient) {}

  getFirstWeatherForecasts(length: number): Observable<WeatherForecast[]> {
    return this.http
      .get<WeatherForecast[]>(this.BASE_URL + '/api' + '/weather')
      .pipe(
        map((weatherForecasts) => weatherForecasts.slice(0, length)),
        map((weatherForecasts) =>
          weatherForecasts.map((forecast: WeatherForecast) => {
            const img = determineWeatherCardImg(forecast.nebulozitate);
            return {
              ...forecast,
              temperatura: Math.round(Number(forecast.temperatura)).toString(),
              img: img,
            };
          })
        ),
        catchError(() => {
          new Error('Error while fetching the weather forecasts!');
          return of([]);
        })
      );
  }
  getWeatherByCity(city: string): Observable<WeatherForecast> {
    this.selectedCity = city;
    return this.http
      .get<WeatherForecast>(this.BASE_URL + '/api' + '/weather/' + city)
      .pipe(
        map((forecast) => {
          const img = determineWeatherCardImg(forecast.nebulozitate);
          return {
            ...forecast,
            temperatura: Math.round(Number(forecast.temperatura)).toString(),
            img: img,
          };
        }),
        catchError(() => {
          new Error('Error while fetching the weather forecasts!');
          return of();
        })
      );
  }

  getSelectedCity() {
    return this.selectedCity ?? 'bucuresti-baneasa';
  }
}

//https://www.google.com/recaptcha/admin/create
