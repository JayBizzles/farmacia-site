import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaCarouselComponent } from './acerca-carousel.component';

describe('AcercaCarouselComponent', () => {
  let component: AcercaCarouselComponent;
  let fixture: ComponentFixture<AcercaCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
