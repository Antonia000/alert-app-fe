import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NowcastAlert } from 'src/app/models/nowcast-alert.model';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { NowcastService } from 'src/app/services/nowcast.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeContainerComponent {
  constructor(
    private readonly nowcastService: NowcastService,
    private readonly weatherService: WeatherService
  ) {}
  nowcastAlerts$: Observable<NowcastAlert[]> = of();
  weatherForecast$: Observable<WeatherForecast[]> = of();

  ngOnInit() {
    this.weatherForecast$ = this.weatherService.getFirstWeatherForecasts(3);
    this.nowcastAlerts$ = this.nowcastService.getNowcastAlerts();
  }
}
