import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './modules/simple-alert-app/home-container/home.component';
import { AlertContainerComponent } from './modules/simple-alert-app/alert-container/alert-container.component';
import { HoroscopeContainerComponent } from './modules/simple-alert-app/horoscope-container/horoscope.component';
import { HoroscopeSingleComponent } from './modules/simple-alert-app/horoscope-container/components/horoscope-single/horoscope-single.component';
import { InfoContainerComponent } from './modules/simple-alert-app/info-container/info-container.component';

const routes: Routes = [
  { path: 'acasa', component: HomeContainerComponent },
  { path: '', redirectTo: 'acasa', pathMatch: 'full' },
  {
    path: 'avertizari-meteo',
    redirectTo: 'avertizari-meteo/bucuresti-baneasa',
    pathMatch: 'full',
  },
  { path: 'avertizari-meteo/:oras', component: AlertContainerComponent },
  {
    path: 'horoscop',
    component: HoroscopeContainerComponent,
  },
  {
    path: 'horoscop/:sign',
    component: HoroscopeSingleComponent,
  },
  {
    path: 'info',
    component: InfoContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
