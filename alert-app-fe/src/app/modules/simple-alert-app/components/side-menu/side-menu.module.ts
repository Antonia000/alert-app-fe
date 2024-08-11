import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideMenuComponent } from './side-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [BrowserModule, RouterModule],
  exports: [SideMenuComponent],
})
export class SideMenuModule {}
