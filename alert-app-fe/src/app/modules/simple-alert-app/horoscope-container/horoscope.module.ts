import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HoroscopeContainerComponent } from './horoscope.component';
import { HoroscopeCardModule } from '../components/horoscope-card/horoscope-card.module';
import { HoroscopeSingleComponent } from './components/horoscope-single/horoscope-single.component';
import { LoaderModule } from '../components/loader/loader.module';

@NgModule({
  declarations: [HoroscopeContainerComponent, HoroscopeSingleComponent],
  imports: [BrowserModule, HoroscopeCardModule, LoaderModule],
  exports: [HoroscopeContainerComponent, HoroscopeSingleComponent],
})
export class HoroscopeModule {}
