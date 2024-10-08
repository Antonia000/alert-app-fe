import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, filter, map, of } from 'rxjs';
import { getCurrentStringDate } from 'src/app/helpers/get-current-date.helper';
import { HoroscopeSign } from 'src/app/helpers/horoscope-signs';
import { HoroscopeCard, HoroscopeDto } from 'src/app/models/horoscope.model';
import { HoroscopeService } from 'src/app/services/horoscope.service';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.scss'],
})
export class HoroscopeContainerComponent implements OnInit {
  signs$: Observable<HoroscopeCard[]> = of();
  currentDate: string = '';
  constructor(
    private readonly horoscopeService: HoroscopeService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentDate = getCurrentStringDate();
    this.signs$ = this.horoscopeService.getHoroscope().pipe(
      filter((data) => !!data),
      map((data: HoroscopeDto[]) => {
        return data
          .filter((data) => data?.data)
          .map((item: HoroscopeDto) => ({
            sign: HoroscopeSign[item.sign as keyof typeof HoroscopeSign],
            title: item.sign.toLocaleUpperCase(),
            ro_data: item.ro_data,
            data: item.data,
            date: item.date,
          }));
      })
    );
  }

  handleRedirectToSinglePage(sign: string) {
    this.router.navigate([`${sign}`], { relativeTo: this.activatedRoute });
  }
}
