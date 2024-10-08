import { Component } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import {
  GeneralAlert,
  GeneralAlertDto,
} from 'src/app/models/general-alert.model';
import { NowcastAlert } from 'src/app/models/nowcast-alert.model';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { GeneralAlertService } from 'src/app/services/general.service';
import { NowcastService } from 'src/app/services/nowcast.service';
import { WeatherService } from 'src/app/services/weather.service';
import { getCurrentStringDate } from 'src/app/helpers/get-current-date.helper';

@Component({
  selector: 'app-home-container',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeContainerComponent {
  constructor(
    private readonly nowcastService: NowcastService,
    private readonly weatherService: WeatherService,
    private readonly generalAlertService: GeneralAlertService
  ) {}
  nowcastAlerts$: Observable<NowcastAlert[]> = of();
  generalAlerts$: Observable<GeneralAlert[]> = of();
  weatherForecast$: Observable<WeatherForecast[]> = of();
  currentDate: string = '';

  ngOnInit() {
    this.currentDate = getCurrentStringDate();
    this.weatherForecast$ = this.weatherService.getFirstWeatherForecasts(3);
    this.nowcastAlerts$ = this.nowcastService.getNowcastAlerts();
    this.generalAlerts$ = this.generalAlertService.getGeneralAlerts();
  }
}
