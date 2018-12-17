import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasDetalheComponent } from './pessoas-detalhe.component';

describe('PessoasDetalheComponent', () => {
  let component: PessoasDetalheComponent;
  let fixture: ComponentFixture<PessoasDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
