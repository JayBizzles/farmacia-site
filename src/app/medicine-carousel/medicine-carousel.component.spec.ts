import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineCarouselComponent } from './medicine-carousel.component';

describe('MedicineCarouselComponent', () => {
  let component: MedicineCarouselComponent;
  let fixture: ComponentFixture<MedicineCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
