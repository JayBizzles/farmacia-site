import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierbasComponent } from './hierbas.component';

describe('HierbasComponent', () => {
  let component: HierbasComponent;
  let fixture: ComponentFixture<HierbasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierbasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierbasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
