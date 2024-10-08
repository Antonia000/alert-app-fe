import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { WeatherService } from './services/weather.service';
import { Observable, catchError, filter, map, of, tap } from 'rxjs';
import { TempWidget } from './modules/simple-alert-app/components/header/header.component';
import { RoutingService } from './services/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'alert-app-fe';
  currentRoute: string;
  headerHasSelect: boolean = false;
  selectedCityWeather$: Observable<TempWidget | null> = of(null);
  selectedCity: string | null = 'bucuresti-baneasa';
  sideMenuState: string = 'extended';

  constructor(
    private router: Router,
    private readonly weatherService: WeatherService,
    private readonly routingService: RoutingService
  ) {
    this.currentRoute = '';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Show progress spinner or progress bar
        // console.log('Route change detected');
      }

      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if (this.currentRoute.includes('/avertizari-meteo')) {
          this.selectedCity = this.router.url?.split('/')[2];
          this.selectedCityWeather$ = this.weatherService
            .getWeatherByCity(this.selectedCity)
            .pipe(
              catchError((err) => {
                return of(err);
              }),
              filter((city) => !!city),
              map((weatherForecast) => ({
                temp: parseInt(weatherForecast.temperatura).toFixed(),
                city: weatherForecast.oras.replace('-', ' '),
              }))
            );

          this.headerHasSelect = true;
        } else {
          this.headerHasSelect = false;
        }
      }
    });
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;

        if (this.currentRoute.includes('/avertizari-meteo')) {
          this.handleSelectedCity(
            localStorage.getItem('city') ?? 'bucuresti-baneasa'
          );
        }
      } else {
        this.selectedCityWeather$ = this.weatherService
          .getWeatherByCity(localStorage.getItem('city') ?? 'bucuresti-baneasa')
          .pipe(
            filter((city) => !!city),
            map((weatherForecast) => ({
              temp: parseInt(weatherForecast.temperatura).toFixed(),
              city: weatherForecast.oras.replace('-', ' '),
            }))
          );
      }
    });
  }

  handleSelectedCity(selectedCity: string) {
    this.selectedCity = selectedCity;
    localStorage.setItem('city', this.selectedCity);

    this.selectedCityWeather$ = this.weatherService
      .getWeatherByCity(selectedCity)
      .pipe(
        filter((city) => !!city),
        map((weatherForecast) => ({
          temp: parseInt(weatherForecast.temperatura).toFixed(),
          city: weatherForecast.oras.replace('-', ' '),
        }))
      );

    this.routingService.redirectTo('/avertizari-meteo/' + this.selectedCity);
  }

  handleSideMenuState(value: string) {
    this.sideMenuState = value;
  }
}
