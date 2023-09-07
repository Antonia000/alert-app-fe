import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cities } from 'src/app/helpers/ro-counties.helper';
export interface TempWidget {
  temp: string | null;
  city: string | null;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cities = cities;
  @Input() temperatureWidget: TempWidget | null = null;
  @Input() hasSelect: boolean = false;
  @Output() selectedCity: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleTranslate(lang: string) {
    console.log(lang);
  }

  handleSelectedCounty(selected: string) {
    this.selectedCity.emit(selected);
  }
  handleCustomValue(city: string) {
    return city.replace(' ', '-');
  }
}
