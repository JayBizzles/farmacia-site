import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligiosoComponent } from './religioso.component';

describe('ReligiosoComponent', () => {
  let component: ReligiosoComponent;
  let fixture: ComponentFixture<ReligiosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReligiosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligiosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
