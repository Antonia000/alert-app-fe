import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopeContainerComponent } from './horoscope.component';

describe('HoroscopeComponent', () => {
  let component: HoroscopeContainerComponent;
  let fixture: ComponentFixture<HoroscopeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoroscopeContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HoroscopeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
