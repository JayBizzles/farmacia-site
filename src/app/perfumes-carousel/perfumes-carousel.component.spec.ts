import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumesCarouselComponent } from './perfumes-carousel.component';

describe('PerfumesCarouselComponent', () => {
  let component: PerfumesCarouselComponent;
  let fixture: ComponentFixture<PerfumesCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfumesCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
