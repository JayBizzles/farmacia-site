import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FajasYDietasGridComponent } from './fajas-y-dietas-grid.component';

describe('FajasYDietasGridComponent', () => {
  let component: FajasYDietasGridComponent;
  let fixture: ComponentFixture<FajasYDietasGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FajasYDietasGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FajasYDietasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
