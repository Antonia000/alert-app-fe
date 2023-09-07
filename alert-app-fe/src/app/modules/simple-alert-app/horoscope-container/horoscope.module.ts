import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HoroscopeContainerComponent } from './horoscope.component';
import { HoroscopeCardModule } from '../components/horoscope-card/horoscope-card.module';
import { HoroscopeSingleComponent } from './components/horoscope-single/horoscope-single.component';

@NgModule({
  declarations: [HoroscopeContainerComponent, HoroscopeSingleComponent],
  imports: [BrowserModule, HoroscopeCardModule],
  exports: [HoroscopeContainerComponent, HoroscopeSingleComponent],
})
export class HoroscopeModule {}
