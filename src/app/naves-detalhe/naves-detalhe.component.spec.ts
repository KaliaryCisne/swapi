import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavesDetalheComponent } from './naves-detalhe.component';

describe('NavesDetalheComponent', () => {
  let component: NavesDetalheComponent;
  let fixture: ComponentFixture<NavesDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavesDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavesDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
