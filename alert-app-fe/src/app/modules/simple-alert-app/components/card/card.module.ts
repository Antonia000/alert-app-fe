import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [BrowserModule],
  exports: [CardComponent],
})
export class CardModule {}
