import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horoscope-card',
  templateUrl: './horoscope-card.component.html',
  styleUrls: ['./horoscope-card.component.scss'],
})
export class HoroscopeCardComponent implements OnInit {
  @Input() sign: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  constructor() {}

  ngOnInit(): void {}
}
