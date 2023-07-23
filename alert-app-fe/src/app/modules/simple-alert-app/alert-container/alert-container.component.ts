import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NowcastAlert } from 'src/app/models/nowcast-alert.model';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { NowcastService } from 'src/app/services/nowcast.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.scss'],
})
export class AlertContainerComponent implements OnInit {
  selectedCity: string = 'Bucuresti';
  // weatherForecast: WeatherForecast = {
  //   oras: 'Bucuresti',
  //   temperatura: '19',
  //   umezeala: '25%',
  //   nebulozitate: 'cer senin',
  //   vant: '4.7 m/s, directia : NV',
  //   data: '',
  //   img: '',
  // };
  // nowcastMock: NowcastAlert[] = [
  //   {
  //     tipMesaj: '2',
  //     numeTipMesaj: 'Atentionare nowcasting',
  //     dataInceput: '2023-06-25T16:35',
  //     dataSfarsit: '2023-06-25T18:00',
  //     semnalare:
  //       'descărcări electrice, grindină de dimensiuni mici, averse care local vor acumula peste 15…20 l/mp, intensificări ale vântului.',
  //     culoare: '0',
  //     numeCuloare: 'galben',
  //     zona: 'Județul Caraş-Severin , zona de munte de peste 1800 m;<br>Județul Hunedoara , zona de munte de peste 1800 m;<br>, Hunedoara',
  //     modificat: '2023-06-25 13:24:01',
  //     creat: '2023-06-25 16:24:01',
  //   },
  //   {
  //     tipMesaj: '1',
  //     numeTipMesaj: 'Avertizare nowcasting',
  //     dataInceput: '2023-06-25T17:00',
  //     dataSfarsit: '2023-06-25T18:00',
  //     semnalare:
  //       'averse torențiale care vor acumula 35... 40 l/mp, frecvente descărcări electrice, intensificări ale vântului, grindină.',
  //     culoare: '1',
  //     numeCuloare: 'portocaliu',
  //     zona: 'Județul Bistrița-Năsăud , zona de munte de peste 1800 m;<br>Județul Hunedoara , zona de munte de peste 1800 m;<br>, Caraș-Severin',
  //     modificat: '2023-06-25 13:48:01',
  //     creat: '2023-06-25 16:48:01',
  //   },
  // ];
  constructor(
    private readonly nowcastService: NowcastService,
    private readonly weatherService: WeatherService
  ) {}
  nowcastAlerts$: Observable<NowcastAlert[]> = of();
  weatherForecast$: Observable<WeatherForecast> = of();

  ngOnInit() {
    this.weatherForecast$ = this.weatherService.getWeatherByCity(
      this.selectedCity
    );
    this.nowcastAlerts$ = this.nowcastService.getNowcastAlertsByCounty(
      this.selectedCity
    );
    // this.nowcastAlerts$.subscribe((data) => console.log(data));
    // TO BE TESTED WHEN ALERTS EXISTS
  }
}
