import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './modules/simple-alert-app/components/header/header.module';
import { SideMenuModule } from './modules/simple-alert-app/components/side-menu/side-menu.module';
import { AlertContainerModule } from './modules/simple-alert-app/alert-container/alert-container.module';
import { HomeContainerModule } from './modules/simple-alert-app/home-container/home.module';
import { NowcastService } from './services/nowcast.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { HoroscopeModule } from './modules/simple-alert-app/horoscope-container/horoscope.module';
import { InfoContainerModule } from './modules/simple-alert-app/info-container/info-container.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeContainerModule,
    HeaderModule,
    SideMenuModule,
    AlertContainerModule,
    HoroscopeModule,
    InfoContainerModule,
  ],
  providers: [NowcastService, WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
