import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of, switchMap, take, tap } from 'rxjs';
import {
  HoroscopeSign,
  HoroscopeSignToRo,
} from 'src/app/helpers/horoscope-signs';
import { HoroscopeDto } from 'src/app/models/horoscope.model';
import { HoroscopeService } from 'src/app/services/horoscope.service';

@Component({
  selector: 'app-horoscope-single',
  templateUrl: './horoscope-single.component.html',
  styleUrls: ['./horoscope-single.component.scss'],
})
export class HoroscopeSingleComponent implements OnInit {
  date: string = '';
  sign$: Observable<HoroscopeDto> = of();
  pngSign: string = '';

  constructor(
    private readonly horoscopeService: HoroscopeService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sign$ = this.activatedRoute.params.pipe(
      take(1),
      map((params) => params['sign']),
      switchMap((sign: string) => {
        return this.horoscopeService.getHoroscopeBySign(sign).pipe(
          tap((sign) => {
            this.pngSign =
              HoroscopeSign[sign.sign as keyof typeof HoroscopeSign];
          })
        );
      })
    );
  }
}
