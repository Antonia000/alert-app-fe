import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() hasSelect: boolean = false;
  @Input() temperatureWidget: TempWidget = { temp: null, city: null };
  @Input() cities: string[] = [];
  @Output() selectedCity: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  handleTranslate(lang: string) {
    console.log(lang);
  }

  handleSelectedCounty(selected: string) {
    this.selectedCity.emit(selected);
  }
}
