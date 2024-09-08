import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-data-card',
  templateUrl: './no-data-card.component.html',
  styleUrls: ['./no-data-card.component.scss'],
})
export class NoDataCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
