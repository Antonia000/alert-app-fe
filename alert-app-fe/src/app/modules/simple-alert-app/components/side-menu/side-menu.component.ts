import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  sideMenuOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleMenuState() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }
}
