import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumesWommenCarouselComponent } from './perfumes-women-carousel.component';

describe('PerfumesWommenCarouselComponent', () => {
  let component: PerfumesWommenCarouselComponent;
  let fixture: ComponentFixture<PerfumesWommenCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfumesWommenCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumesWommenCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
