import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from '../components/card/card.module';
import { AlertSectionModule } from '../components/alert-section/alert-section.module';
import { RouterModule } from '@angular/router';
import { AlertContainerComponent } from './alert-container.component';

@NgModule({
  declarations: [AlertContainerComponent],
  imports: [BrowserModule, CardModule, AlertSectionModule, RouterModule],
  exports: [AlertContainerComponent],
})
export class AlertContainerModule {}
