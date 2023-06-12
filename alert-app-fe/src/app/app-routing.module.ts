import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/simple-alert-app/home/home.component';

const routes: Routes = [
  { path: 'acasa', component: HomeComponent },
  { path: 'alerte-meteo', component: HomeComponent },
  { path: 'horoscop', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
