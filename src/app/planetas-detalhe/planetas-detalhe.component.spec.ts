import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetasDetalheComponent } from './planetas-detalhe.component';

describe('PlanetasDetalheComponent', () => {
  let component: PlanetasDetalheComponent;
  let fixture: ComponentFixture<PlanetasDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetasDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
