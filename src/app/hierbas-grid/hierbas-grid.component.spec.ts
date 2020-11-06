import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierbasGridComponent } from './hierbas-grid.component';

describe('HierbasGridComponent', () => {
  let component: HierbasGridComponent;
  let fixture: ComponentFixture<HierbasGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierbasGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierbasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
