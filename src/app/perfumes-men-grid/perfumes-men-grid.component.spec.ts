import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumesMenGridComponent } from './perfumes-men-grid.component';

describe('PerfumesMenGridComponent', () => {
  let component: PerfumesMenGridComponent;
  let fixture: ComponentFixture<PerfumesMenGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfumesMenGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumesMenGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
