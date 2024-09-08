import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfoContainerComponent } from './info-container.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InfoContainerComponent, PrivacyPolicyComponent],
  imports: [BrowserModule, RouterModule],
  exports: [InfoContainerComponent, PrivacyPolicyComponent],
})
export class InfoContainerModule {}
