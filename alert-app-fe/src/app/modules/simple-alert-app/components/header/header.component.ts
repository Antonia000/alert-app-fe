import { Component, Input, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}
  handleTranslate(lang: string) {
    console.log(lang);
  }

  handleSelectedCounty(selected: string) {
    console.log(selected);
  }
}
