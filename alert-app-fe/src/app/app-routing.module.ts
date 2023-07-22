import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './modules/simple-alert-app/home-container/home.component';
import { AlertContainerComponent } from './modules/simple-alert-app/alert-container/alert-container.component';

const routes: Routes = [
  { path: 'acasa', component: HomeContainerComponent },
  { path: 'avertizari-meteo', component: AlertContainerComponent },
  { path: 'horoscop', component: HomeContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
