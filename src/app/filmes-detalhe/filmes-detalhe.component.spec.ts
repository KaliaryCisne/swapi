import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesDetalheComponent } from './filmes-detalhe.component';

describe('FilmesDetalheComponent', () => {
  let component: FilmesDetalheComponent;
  let fixture: ComponentFixture<FilmesDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmesDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
