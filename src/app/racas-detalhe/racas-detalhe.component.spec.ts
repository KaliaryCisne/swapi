import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacasDetalheComponent } from './racas-detalhe.component';

describe('RacasDetalheComponent', () => {
  let component: RacasDetalheComponent;
  let fixture: ComponentFixture<RacasDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacasDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
