import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumesCaballerosComponent } from './perfumes-caballeros.component';

describe('PerfumesCaballerosComponent', () => {
  let component: PerfumesCaballerosComponent;
  let fixture: ComponentFixture<PerfumesCaballerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfumesCaballerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumesCaballerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
