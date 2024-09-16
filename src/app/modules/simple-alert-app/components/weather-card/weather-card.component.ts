import { Component, Input, OnInit } from '@angular/core';
import { WeatherConditions } from 'src/app/models/weather-forecast.model';

@Component({
  selector: 'app-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() backgroundImage: WeatherConditions = WeatherConditions.INDD;
  @Input() isMini: boolean = false;
  @Input() county: string = '';
  @Input() additional: { umezeala?: string; vant?: string } = {
    umezeala: undefined,
    vant: undefined,
  };
  isNightTime: boolean = false;
  backgroundImagePath = '';

  constructor() {}

  ngOnInit(): void {
    this.backgroundImagePath =
      'url' +
      '(' +
      '../../../../../assets/img/weather/' +
      this.backgroundImage +
      ')';

    this.isNightTime = this.backgroundImage.split('.')[0].endsWith('N');
  }
}
