import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherCardModule } from '../components/weather-card/weather-card.module';
import { AlertSectionModule } from '../components/alert-section/alert-section.module';
import { RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home.component';
import { NoDataCardModule } from '../components/no-data-card/no-data-card.module';
import { LoaderModule } from '../components/loader/loader.module';

@NgModule({
  declarations: [HomeContainerComponent],
  imports: [
    BrowserModule,
    WeatherCardModule,
    AlertSectionModule,
    RouterModule,
    NoDataCardModule,
    LoaderModule,
  ],
  exports: [HomeContainerComponent],
})
export class HomeContainerModule {}
