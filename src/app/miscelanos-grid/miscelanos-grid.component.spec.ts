import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscelanosGridComponent } from './miscelanos-grid.component';

describe('MiscelanosGridComponent', () => {
  let component: MiscelanosGridComponent;
  let fixture: ComponentFixture<MiscelanosGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscelanosGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscelanosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
