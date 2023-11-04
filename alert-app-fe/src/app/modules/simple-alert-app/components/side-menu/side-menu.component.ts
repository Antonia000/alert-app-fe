import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  sideMenuOpen: boolean = true;
  screenWidth = window.innerWidth;
  breakPoint: number = 1300;
  @Output() sideMenuStateChanged: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.sideMenuOpen =
      window.localStorage.getItem('sideMenuState') === 'extended'
        ? true
        : false;
    if (this.screenWidth <= this.breakPoint) {
      this.handleEmitSideMenuState(this.sideMenuOpen);
    } else {
      this.handleEmitSideMenuState(this.sideMenuOpen);
    }
  }

  handleMenuState() {
    const state = this.handleEmitSideMenuState(!this.sideMenuOpen);
    window.localStorage.setItem('sideMenuState', state);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.handleEmitSideMenuState(
      this.screenWidth < this.breakPoint ? false : true
    );
  }

  private handleEmitSideMenuState(sideMenuState: boolean) {
    this.sideMenuOpen = sideMenuState;
    const state = this.sideMenuOpen ? 'extended' : 'unextended';
    this.sideMenuStateChanged.emit(state);
    return state;
  }
}
