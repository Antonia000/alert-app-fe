import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideMenuComponent } from './side-menu.component';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [BrowserModule],
  exports: [SideMenuComponent],
})
export class SideMenuModule {}
