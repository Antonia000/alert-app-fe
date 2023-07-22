import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertSectionComponent } from './alert-section.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlertSectionComponent],
  imports: [BrowserModule, RouterModule],
  exports: [AlertSectionComponent],
})
export class AlertSectionModule {}
