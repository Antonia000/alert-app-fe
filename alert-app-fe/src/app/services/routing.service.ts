import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoutingService {
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  redirectToHome() {
    this.router.navigate([`home`]);
  }

  redirectRelativeTo(route: string) {
    this.router.navigate([route], { relativeTo: this.activatedRoute });
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}
