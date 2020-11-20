import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierbasCarouselComponent } from './hierbas-carousel.component';

describe('HierbasCarouselComponent', () => {
  let component: HierbasCarouselComponent;
  let fixture: ComponentFixture<HierbasCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierbasCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierbasCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
