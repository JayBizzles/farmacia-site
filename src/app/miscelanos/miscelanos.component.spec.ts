import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscelanosComponent } from './miscelanos.component';

describe('MiscelanosComponent', () => {
  let component: MiscelanosComponent;
  let fixture: ComponentFixture<MiscelanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscelanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscelanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
