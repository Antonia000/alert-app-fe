import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HoroscopeCardComponent } from './horoscope-card.component';

@NgModule({
  declarations: [HoroscopeCardComponent],
  imports: [BrowserModule],
  exports: [HoroscopeCardComponent],
})
export class HoroscopeCardModule {}
