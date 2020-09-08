import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciaComponent } from './pharmacia.component';

describe('PharmaciaComponent', () => {
  let component: PharmaciaComponent;
  let fixture: ComponentFixture<PharmaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
