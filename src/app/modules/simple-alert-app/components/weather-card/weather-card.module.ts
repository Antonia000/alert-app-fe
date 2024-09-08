import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherCardComponent } from './weather-card.component';

@NgModule({
  declarations: [WeatherCardComponent],
  imports: [BrowserModule],
  exports: [WeatherCardComponent],
})
export class WeatherCardModule {}
