import { Component } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { cities } from './helpers/cities.helper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'alert-app-fe';
  currentRoute: string;
  headerHasSelect: boolean = false;
  cities = cities;

  constructor(private router: Router) {
    this.currentRoute = '';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Show progress spinner or progress bar
        console.log('Route change detected');
      }

      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url;
        if (this.currentRoute === '/avertizari-meteo') {
          this.headerHasSelect = true;
        } else {
          this.headerHasSelect = false;
        }
      }

      if (event instanceof NavigationError) {
        // Hide progress spinner or progress bar

        // Present error to user
        console.log(event.error);
      }
    });
  }
  handleSelectedCity(selectedCity: string) {
    console.log(selectedCity);
  }
}
