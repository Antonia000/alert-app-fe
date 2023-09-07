import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopeSingleComponent } from './horoscope-single.component';

describe('HoroscopeSingleComponent', () => {
  let component: HoroscopeSingleComponent;
  let fixture: ComponentFixture<HoroscopeSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoroscopeSingleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HoroscopeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
