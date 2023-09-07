import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of, take, tap } from 'rxjs';
import { HoroscopeDto } from 'src/app/models/horoscope.model';
import { HoroscopeService } from 'src/app/services/horoscope.service';

@Component({
  selector: 'app-horoscope-single',
  templateUrl: './horoscope-single.component.html',
  styleUrls: ['./horoscope-single.component.scss'],
})
export class HoroscopeSingleComponent implements OnInit {
  date: string = '';
  signName$: Observable<string> = of('');
  sign$: Observable<HoroscopeDto> = of();
  constructor(
    private readonly horoscopeService: HoroscopeService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const day = new Date().getDay();
    const month = new Date().toLocaleString('default', { month: 'short' });
    const year = new Date().getFullYear();
    this.date = `${day} ${month} ${year}`;
    this.signName$ = this.activatedRoute.params.pipe(
      take(1),
      map((params) => params['sign']),
      tap((sign: string) => {
        this.sign$ = this.horoscopeService.getHoroscopeBySign(sign);
      })
    );
  }
}
