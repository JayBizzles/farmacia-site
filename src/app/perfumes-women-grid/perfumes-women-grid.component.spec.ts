import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumesWomenGridComponent } from './perfumes-women-grid.component';

describe('PerfumesWomenGridComponent', () => {
  let component: PerfumesWomenGridComponent;
  let fixture: ComponentFixture<PerfumesWomenGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfumesWomenGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumesWomenGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
