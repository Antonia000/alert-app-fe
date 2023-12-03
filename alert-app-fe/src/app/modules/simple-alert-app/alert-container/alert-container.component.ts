import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of, take } from 'rxjs';
import {
  CitiesToCouties,
  cities,
  counties,
} from 'src/app/helpers/ro-counties.helper';
import { GeneralAlert } from 'src/app/models/general-alert.model';
import { NowcastAlert } from 'src/app/models/nowcast-alert.model';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { GeneralAlertService } from 'src/app/services/general.service';
import { NowcastService } from 'src/app/services/nowcast.service';
import { WeatherService } from 'src/app/services/weather.service';
import { AlertSectionModule } from '../components/alert-section/alert-section.module';

@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.scss'],
})
export class AlertContainerComponent implements OnInit {
  selectedCity: CitiesToCouties = <CitiesToCouties>'bucuresti-baneasa';
  displayedCity: string = this.formatDisplayedCity('');
  cities = cities;
  nowcastAlerts$: Observable<NowcastAlert[]> = of();
  generalAlerts$: Observable<GeneralAlert[]> = of();
  weatherForecast$: Observable<WeatherForecast> = of();
  constructor(
    private readonly nowcastService: NowcastService,
    private readonly generalAlertService: GeneralAlertService,
    private readonly weatherService: WeatherService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    this.router.events.pipe(take(1)).subscribe(() => {
      this.activatedRoute.paramMap.pipe(take(1)).subscribe((params) => {
        this.selectedCity = params.get('oras') as CitiesToCouties;

        this.displayedCity = this.formatDisplayedCity(this.selectedCity);
        this.weatherForecast$ = this.weatherService.getWeatherByCity(
          this.selectedCity
        );
        this.nowcastAlerts$ = this.nowcastService.getNowcastAlertsByCounty(
          CitiesToCouties[this.selectedCity as keyof typeof CitiesToCouties]
        );
      });
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.selectedCity = params.get('oras') as CitiesToCouties;

      this.displayedCity = this.formatDisplayedCity(this.selectedCity);
      this.weatherForecast$ = this.weatherService.getWeatherByCity(
        this.selectedCity
      );
      this.nowcastAlerts$ = this.nowcastService.getNowcastAlertsByCounty(
        CitiesToCouties[this.selectedCity as keyof typeof CitiesToCouties]
      );
    });
    this.generalAlerts$ = this.generalAlertService
      .getGeneralAlerts()
      .pipe((alerts) => {
        return alerts.pipe(
          map((alerts: GeneralAlert[]) => {
            return alerts.filter((alert) =>
              alert.judete?.includes(this.selectedCity)
            );
          })
        );
      });
    this.router.navigate(['/avertizari-meteo/' + this.selectedCity]);
  }

  private formatDisplayedCity(city: string) {
    return city.replace('-', ' ');
  }
}
