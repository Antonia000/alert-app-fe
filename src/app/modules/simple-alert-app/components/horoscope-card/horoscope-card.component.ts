import { Component, Input, OnInit } from '@angular/core';
import { HoroscopeSign } from 'src/app/helpers/horoscope-signs';

@Component({
  selector: 'app-horoscope-card',
  templateUrl: './horoscope-card.component.html',
  styleUrls: ['./horoscope-card.component.scss'],
})
export class HoroscopeCardComponent implements OnInit {
  @Input() sign: HoroscopeSign = HoroscopeSign.gemeni;
  @Input() title: string = '';
  @Input() text: string = '';
  horoscopeSigns = HoroscopeSign;
  constructor() {}

  ngOnInit(): void {}
}
