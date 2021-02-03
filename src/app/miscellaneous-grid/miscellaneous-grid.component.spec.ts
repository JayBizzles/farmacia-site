import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousGridComponent } from './miscellaneous-grid.component';

describe('MiscellaneousGridComponent', () => {
  let component: MiscellaneousGridComponent;
  let fixture: ComponentFixture<MiscellaneousGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscellaneousGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
