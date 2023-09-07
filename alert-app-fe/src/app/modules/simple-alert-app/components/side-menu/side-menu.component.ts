import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  sideMenuOpen: boolean = false;
  @Output() sideMenuStateChanged: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.sideMenuOpen = true;
  }

  handleMenuState() {
    this.sideMenuOpen = !this.sideMenuOpen;
    this.sideMenuStateChanged.emit(
      this.sideMenuOpen ? 'extended' : 'unextended'
    );
  }
}
