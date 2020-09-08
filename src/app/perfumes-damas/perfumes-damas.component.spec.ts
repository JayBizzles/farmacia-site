import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumesDamasComponent } from './perfumes-damas.component';

describe('PerfumesDamasComponent', () => {
  let component: PerfumesDamasComponent;
  let fixture: ComponentFixture<PerfumesDamasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfumesDamasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumesDamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
