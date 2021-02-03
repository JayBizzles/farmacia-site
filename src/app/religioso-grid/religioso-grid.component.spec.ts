import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligiosoGridComponent } from './religioso-grid.component';

describe('ReligiosoGridComponent', () => {
  let component: ReligiosoGridComponent;
  let fixture: ComponentFixture<ReligiosoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReligiosoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligiosoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
