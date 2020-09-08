import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FajasYDietasComponent } from './fajas-y-dietas.component';

describe('FajasYDietasComponent', () => {
  let component: FajasYDietasComponent;
  let fixture: ComponentFixture<FajasYDietasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FajasYDietasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FajasYDietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
