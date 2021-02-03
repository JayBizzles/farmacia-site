import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumesMenCarouselComponent } from './perfumes-men-carousel.component';

describe('PerfumesMenCarouselComponent', () => {
  let component: PerfumesMenCarouselComponent;
  let fixture: ComponentFixture<PerfumesMenCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfumesMenCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumesMenCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
