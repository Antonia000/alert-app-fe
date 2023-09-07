import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopeCardComponent } from './horoscope-card.component';

describe('HoroscopeCardComponent', () => {
  let component: HoroscopeCardComponent;
  let fixture: ComponentFixture<HoroscopeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoroscopeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HoroscopeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
