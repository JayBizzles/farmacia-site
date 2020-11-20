import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciaCarouselComponent } from './pharmacia-carousel.component';

describe('PharmaciaCarouselComponent', () => {
  let component: PharmaciaCarouselComponent;
  let fixture: ComponentFixture<PharmaciaCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaciaCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaciaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
