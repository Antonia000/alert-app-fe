import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from '../components/card/card.module';
import { AlertSectionModule } from '../components/alert-section/alert-section.module';
import { RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home.component';
import { NowcastService } from 'src/app/services/nowcast.service';
import { NoDataCardComponent } from '../components/no-data-card/no-data-card.component';
import { NoDataCardModule } from '../components/no-data-card/no-data-card.module';

@NgModule({
  declarations: [HomeContainerComponent],
  imports: [
    BrowserModule,
    CardModule,
    AlertSectionModule,
    RouterModule,
    NoDataCardModule,
  ],
  exports: [HomeContainerComponent],
})
export class HomeContainerModule {}
